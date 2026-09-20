import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf9jm3b-r.css';
import '../../css/a/an4-mnb4c.css';
import '../../css/m/m0352v01g.css';
import '../../css/z/zurzo7b3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hf9jm3b-r"/><path class="an4-mnb4c"/><path class="m0352v01g"/><path class="zurzo7b3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-specialty-knee-1"} {...others} />);
}

export default Component;
