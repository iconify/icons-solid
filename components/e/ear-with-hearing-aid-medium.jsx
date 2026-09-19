import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jj7c0gb2i.css';
import '../../css/y/yy8m7jb5k.css';
import '../../css/h/hq34f_b-d.css';
import '../../css/k/klxuwdbft.css';
import '../../css/c/cxj-9dstq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jj7c0gb2i"/><path class="yy8m7jb5k"/><path class="hq34f_b-d"/><path class="klxuwdbft"/><path class="cxj-9dstq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ear-with-hearing-aid-medium"} {...others} />);
}

export default Component;
