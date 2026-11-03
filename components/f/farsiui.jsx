import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvu7hs4ct.css';
import '../../css/q/q8_vazstx.css';
import '../../css/p/p4m49acib.css';

const viewBox = {"width":330,"height":323};
const content = `<path class="zvu7hs4ct"/><path class="q8_vazstx"/><path class="p4m49acib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:farsiui"} {...others} />);
}

export default Component;
