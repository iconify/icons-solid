import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2jl4nb0t.css';
import '../../css/z/zikzdnbwk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c2jl4nb0t"/><path class="zikzdnbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brine-pond-20"} {...others} />);
}

export default Component;
