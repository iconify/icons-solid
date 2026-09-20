import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwjci56pw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cwjci56pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crowdsec-manager-dark"} {...others} />);
}

export default Component;
