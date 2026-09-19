import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wa7daubvc.css';
import '../../css/e/e8xy7gp4x.css';
import '../../css/v/vn7ulgb4c.css';
import '../../css/r/rckp78qat.css';
import '../../css/y/y3n5ew-kq.css';
import '../../css/s/sdtgrrbdg.css';
import '../../css/a/aza2b6v_c.css';
import '../../css/r/rlk90acht.css';
import '../../css/e/ec0_7pzkd.css';
import '../../css/h/h8rus56-c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wa7daubvc"/><path class="e8xy7gp4x"/><path class="vn7ulgb4c"/><path class="rckp78qat"/><path class="y3n5ew-kq"/><path class="sdtgrrbdg"/><path class="aza2b6v_c"/><path class="rlk90acht"/><path class="ec0_7pzkd"/><path class="h8rus56-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:baby-medium-light"} {...others} />);
}

export default Component;
