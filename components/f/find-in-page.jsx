import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noad8bc2x.css';
import '../../css/v/vbgzj3b-x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="noad8bc2x"/><path class="vbgzj3b-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:find-in-page"} {...others} />);
}

export default Component;
