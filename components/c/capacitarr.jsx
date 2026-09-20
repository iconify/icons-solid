import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-52l8b9e.css';
import '../../css/u/u0xljyb_p.css';
import '../../css/v/v07fepgba.css';
import '../../css/c/czwb8zbnq.css';
import '../../css/l/lvbp78bee.css';
import '../../css/t/tlg6vrbmm.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w-52l8b9e"/><path class="u0xljyb_p"/><path class="v07fepgba"/><path class="czwb8zbnq"/><path class="lvbp78bee"/><circle class="tlg6vrbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitarr"} {...others} />);
}

export default Component;
