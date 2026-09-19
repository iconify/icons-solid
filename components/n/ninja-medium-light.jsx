import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkls46hic.css';
import '../../css/d/didvi7dmk.css';
import '../../css/o/o_6-99bzp.css';
import '../../css/o/o9difac9m.css';
import '../../css/c/cp-ee1cfs.css';
import '../../css/e/ed-n5hb7g.css';
import '../../css/k/kr7rerbuk.css';
import '../../css/c/ce7cxvbzl.css';
import '../../css/f/fudtawgso.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xkls46hic"/><path class="didvi7dmk"/><path class="o_6-99bzp"/><path class="o9difac9m"/><path class="cp-ee1cfs"/><path class="ed-n5hb7g"/><path class="kr7rerbuk"/><path class="ce7cxvbzl"/><path class="fudtawgso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ninja-medium-light"} {...others} />);
}

export default Component;
