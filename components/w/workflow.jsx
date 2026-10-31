import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s645b7iut.css';
import '../../css/b/bhawjkaml.css';
import '../../css/s/sbi5f-bon.css';
import '../../css/w/w7ich50hh.css';
import '../../css/k/kqygjhuxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s645b7iut wm-shadow"/><path class="bhawjkaml wm-shadow"/><path class="sbi5f-bon"/><path class="w7ich50hh"/><path class="kqygjhuxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:workflow"} {...others} />);
}

export default Component;
