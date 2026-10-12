import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5r0_vb_l.css';
import '../../css/b/bn7oupkej.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t5r0_vb_l"/><path class="bn7oupkej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:palette-stroke-20"} {...others} />);
}

export default Component;
