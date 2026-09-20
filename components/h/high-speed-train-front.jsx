import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-7x1f-9f.css';
import '../../css/a/ae8qb6bze.css';
import '../../css/j/j8315xbot.css';
import '../../css/l/l6_74wb4w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h-7x1f-9f"/><path class="ae8qb6bze"/><path class="j8315xbot"/><path class="l6_74wb4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:high-speed-train-front"} {...others} />);
}

export default Component;
