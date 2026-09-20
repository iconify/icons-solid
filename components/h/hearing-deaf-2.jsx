import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/vvisndbxo.css';
import '../../css/j/j_y3cbb3i.css';
import '../../css/o/os7a7-muo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="vvisndbxo"/><path class="j_y3cbb3i"/><path class="os7a7-muo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hearing-deaf-2"} {...others} />);
}

export default Component;
