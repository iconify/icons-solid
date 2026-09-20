import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofgarebcg.css';
import '../../css/b/b7yzzhb5p.css';
import '../../css/j/ja1_1-bwv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ofgarebcg"/><path class="b7yzzhb5p"/><path class="ja1_1-bwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:stopwatch-half-flat"} {...others} />);
}

export default Component;
