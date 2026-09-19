import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxt8ivbsc.css';
import '../../css/c/ckqvl2v2i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mxt8ivbsc"/><circle class="ckqvl2v2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:help"} {...others} />);
}

export default Component;
