import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpifswb1p.css';
import '../../css/c/cuadd06uu.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="fpifswb1p"/><path class="cuadd06uu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:text-color-fill-12"} {...others} />);
}

export default Component;
