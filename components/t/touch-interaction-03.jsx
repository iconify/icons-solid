import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uu8ni758b.css';
import '../../css/d/d824o581c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uu8ni758b"/><path class="d824o581c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:touch-interaction-03"} {...others} />);
}

export default Component;
