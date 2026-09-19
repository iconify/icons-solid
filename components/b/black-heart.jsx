import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imz_-g2vu.css';
import '../../css/o/o8e_gr1ea.css';
import '../../css/k/k2kesjviu.css';
import '../../css/y/yg1bsebzz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="imz_-g2vu"/><path class="o8e_gr1ea"/><path class="k2kesjviu"/><ellipse transform="rotate(30 23.477 12.594)" class="yg1bsebzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:black-heart"} {...others} />);
}

export default Component;
