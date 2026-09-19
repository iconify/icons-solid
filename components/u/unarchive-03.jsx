import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vgo9wxbsq.css';
import '../../css/z/z22manb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vgo9wxbsq"/><path class="z22manb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:unarchive-03"} {...others} />);
}

export default Component;
