import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwgz_dbzy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cwgz_dbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:electronic-arts-dark"} {...others} />);
}

export default Component;
