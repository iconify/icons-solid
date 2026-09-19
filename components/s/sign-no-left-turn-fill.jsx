import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcdytdbkh.css';
import '../../css/c/c7ts7bbcv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="bcdytdbkh"/><path class="c7ts7bbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-no-left-turn-fill"} {...others} />);
}

export default Component;
