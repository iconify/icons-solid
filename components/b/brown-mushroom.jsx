import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsz2-vbnp.css';
import '../../css/c/cju8e-bhj.css';
import '../../css/v/vm24_-b9n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bsz2-vbnp"/><path class="cju8e-bhj"/><ellipse transform="rotate(30 20.28 7.436)" class="vm24_-b9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:brown-mushroom"} {...others} />);
}

export default Component;
