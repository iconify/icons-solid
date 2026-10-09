import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fop36ybmj.css';
import '../../css/v/vpxwfc0bg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fop36ybmj"/><path class="vpxwfc0bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-range-48-bold"} {...others} />);
}

export default Component;
