import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3pnzib4i.css';
import '../../css/d/dqshecczl.css';
import '../../css/c/c3w9l72hp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d3pnzib4i"/><path class="dqshecczl"/><path class="c3w9l72hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-tipping-hand"} {...others} />);
}

export default Component;
