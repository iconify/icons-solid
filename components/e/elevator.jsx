import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dkox_ob8g.css';
import '../../css/s/srzy8c7jv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dkox_ob8g"/><path class="srzy8c7jv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:elevator"} {...others} />);
}

export default Component;
