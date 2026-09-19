import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3ut29bwv.css';
import '../../css/v/v_olmacjh.css';
import '../../css/n/njl38_b4g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="r3ut29bwv"/><path class="v_olmacjh"/><path class="njl38_b4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-curly-hair"} {...others} />);
}

export default Component;
