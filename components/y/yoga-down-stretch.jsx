import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnbj28bcv.css';
import '../../css/s/sdvkxab9n.css';
import '../../css/d/d_vulypmt.css';
import '../../css/b/bf_m8_5mk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rnbj28bcv"/><path class="sdvkxab9n"/><path class="d_vulypmt"/><path class="bf_m8_5mk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:yoga-down-stretch"} {...others} />);
}

export default Component;
