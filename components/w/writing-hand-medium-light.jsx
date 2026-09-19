import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e46d20o6r.css';
import '../../css/e/eugc9g2vh.css';
import '../../css/h/h51tn0b6q.css';
import '../../css/d/dhh86kbkq.css';
import '../../css/t/ttrl-dbmq.css';
import '../../css/b/bghxu59cd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="e46d20o6r"/><path class="eugc9g2vh"/><path class="h51tn0b6q"/><path class="dhh86kbkq"/><path class="ttrl-dbmq"/><path class="bghxu59cd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:writing-hand-medium-light"} {...others} />);
}

export default Component;
