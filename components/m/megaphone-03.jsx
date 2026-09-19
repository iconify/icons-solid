import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u43x3zhny.css';
import '../../css/t/t2hcxfbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u43x3zhny"/><path class="t2hcxfbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:megaphone-03"} {...others} />);
}

export default Component;
