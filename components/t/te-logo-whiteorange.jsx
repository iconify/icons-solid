import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewxfdn_wl.css';
import '../../css/y/y51mhybdb.css';
import '../../css/u/udkm6e2mv.css';
import '../../css/j/j5582lbug.css';
import '../../css/m/ml-o_2bwh.css';

const viewBox = {"width":570,"height":104};
const content = `<path class="ewxfdn_wl"/><path class="y51mhybdb"/><path class="udkm6e2mv"/><circle class="j5582lbug"/><path class="ml-o_2bwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:te-logo-whiteorange"} {...others} />);
}

export default Component;
