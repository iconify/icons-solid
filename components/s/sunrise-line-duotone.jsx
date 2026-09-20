import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lt7j86jjt.css';
import '../../css/c/cjpkl_0zw.css';
import '../../css/l/l6md27rub.css';
import '../../css/c/caiypabfb.css';
import '../../css/g/gfl8l2lww.css';
import '../../css/j/je0pbq8pu.css';
import '../../css/x/xnx0ex6ho.css';
import '../../css/n/n8-rodbwi.css';
import '../../css/s/sr0sjvhrz.css';
import '../../css/w/wtg12y1vi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lt7j86jjt"/><path class="cjpkl_0zw"/><path class="l6md27rub"/><path class="caiypabfb"/><path class="gfl8l2lww"/><path class="je0pbq8pu"/><path class="xnx0ex6ho"/><path class="n8-rodbwi"/><path class="sr0sjvhrz"/><path class="wtg12y1vi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sunrise-line-duotone"} {...others} />);
}

export default Component;
