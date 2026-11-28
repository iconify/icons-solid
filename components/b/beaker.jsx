import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tzv76wqmw.css';
import '../../css/x/xyj5r3ilr.css';
import '../../css/r/rpmcc2kwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tzv76wqmw"/><path class="xyj5r3ilr"/><path class="rpmcc2kwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:beaker"} {...others} />);
}

export default Component;
