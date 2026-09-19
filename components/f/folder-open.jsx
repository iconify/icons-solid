import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f7--fccjq.css';
import '../../css/z/z791spbav.css';
import '../../css/b/b9jcm8g0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f7--fccjq"/><path class="z791spbav"/><path class="b9jcm8g0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-open"} {...others} />);
}

export default Component;
