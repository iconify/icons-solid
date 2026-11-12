import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz2fis0uk.css';
import '../../css/q/qjmr-gqfc.css';
import '../../css/m/mjmbhbcxa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nz2fis0uk"/><path class="qjmr-gqfc"/><path class="mjmbhbcxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whodb-light"} {...others} />);
}

export default Component;
