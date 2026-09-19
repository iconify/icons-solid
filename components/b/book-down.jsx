import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6v3txboo.css';
import '../../css/d/d4os5vbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r6v3txboo"/><path class="d4os5vbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-down"} {...others} />);
}

export default Component;
