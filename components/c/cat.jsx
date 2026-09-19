import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_8dibbbr.css';
import '../../css/n/n9cjt0gfj.css';
import '../../css/h/h16w2w8rj.css';
import '../../css/d/do5q9cj2u.css';
import '../../css/d/dbn_3t14u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f_8dibbbr"/><path class="n9cjt0gfj"/><path class="h16w2w8rj"/><path class="do5q9cj2u"/><path class="dbn_3t14u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cat"} {...others} />);
}

export default Component;
