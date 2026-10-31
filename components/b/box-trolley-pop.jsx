import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/c/cil7cgb9w.css';
import '../../css/v/v8vgj3qim.css';
import '../../css/h/hodb5cbnl.css';
import '../../css/g/gxi8who9z.css';
import '../../css/p/ph0i70bfl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="cil7cgb9w"/><path class="v8vgj3qim"/><path class="hodb5cbnl"/><path class="gxi8who9z"/><path class="ph0i70bfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:box-trolley-pop"} {...others} />);
}

export default Component;
