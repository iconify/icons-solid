import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq7k3me4l.css';
import '../../css/h/hh1f6tmth.css';
import '../../css/l/l76wa3b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lq7k3me4l"/><path class="hh1f6tmth"/><path class="l76wa3b1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:flash-off"} {...others} />);
}

export default Component;
