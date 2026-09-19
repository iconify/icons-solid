import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjdrzdbgw.css';
import '../../css/z/z03o25o3p.css';
import '../../css/l/lrp9thb_f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pjdrzdbgw"/><path class="z03o25o3p"/><path class="lrp9thb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:touch-2-filled"} {...others} />);
}

export default Component;
