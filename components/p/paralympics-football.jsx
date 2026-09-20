import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/owsvu6bid.css';
import '../../css/q/qlh168b9g.css';
import '../../css/e/evemw9mdm.css';
import '../../css/v/vhcdvq7hv.css';
import '../../css/r/rpe3dmbpa.css';
import '../../css/j/j66rgacqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="owsvu6bid"/><path class="qlh168b9g"/><path class="evemw9mdm"/><path class="vhcdvq7hv"/><path class="rpe3dmbpa"/><path class="j66rgacqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:paralympics-football"} {...others} />);
}

export default Component;
