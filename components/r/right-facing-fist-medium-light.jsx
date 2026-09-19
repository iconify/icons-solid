import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjpksjvyr.css';
import '../../css/z/zwze4_b8q.css';
import '../../css/t/tn7_zcbnt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jjpksjvyr"/><path class="zwze4_b8q"/><path clip-rule="evenodd" class="tn7_zcbnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:right-facing-fist-medium-light"} {...others} />);
}

export default Component;
