import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2pijqbup.css';
import '../../css/i/i7hvk9b3x.css';
import '../../css/v/vn7ulgb4c.css';
import '../../css/p/p-rkk7bbj.css';
import '../../css/y/y3n5ew-kq.css';
import '../../css/s/sdtgrrbdg.css';
import '../../css/a/aza2b6v_c.css';
import '../../css/r/rlk90acht.css';
import '../../css/j/jsffi-jlv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="a2pijqbup"/><path class="i7hvk9b3x"/><path class="vn7ulgb4c"/><path class="p-rkk7bbj"/><path class="y3n5ew-kq"/><path class="sdtgrrbdg"/><path class="aza2b6v_c"/><path class="rlk90acht"/><path class="jsffi-jlv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:baby-light"} {...others} />);
}

export default Component;
