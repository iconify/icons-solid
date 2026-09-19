import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sac2uywbx.css';
import '../../css/b/b164z8bwv.css';
import '../../css/n/nnv-o8bxk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="sac2uywbx"/><path class="b164z8bwv"/><ellipse transform="rotate(30 23.477 12.594)" class="nnv-o8bxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:blue-heart"} {...others} />);
}

export default Component;
