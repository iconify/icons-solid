import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m74xgb3es.css';
import '../../css/x/x1y1bjbwh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="bi12bsetm"><path class="m74xgb3es"/><path class="x1y1bjbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:basket-checked"} {...others} />);
}

export default Component;
