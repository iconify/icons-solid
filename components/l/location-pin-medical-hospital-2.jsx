import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aon36bczk.css';
import '../../css/h/h5lxd7bxk.css';
import '../../css/a/ahcl2lbst.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="aon36bczk"/><path class="h5lxd7bxk"/><path class="ahcl2lbst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:location-pin-medical-hospital-2"} {...others} />);
}

export default Component;
