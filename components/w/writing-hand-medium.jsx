import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o21q-ql8d.css';
import '../../css/w/wbc_yjydh.css';
import '../../css/h/h51tn0b6q.css';
import '../../css/d/dhh86kbkq.css';
import '../../css/t/ttrl-dbmq.css';
import '../../css/b/bghxu59cd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="o21q-ql8d"/><path class="wbc_yjydh"/><path class="h51tn0b6q"/><path class="dhh86kbkq"/><path class="ttrl-dbmq"/><path class="bghxu59cd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:writing-hand-medium"} {...others} />);
}

export default Component;
