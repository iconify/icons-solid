import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/k/kegbqu6mm.css';
import '../../css/j/jz9fog4wa.css';
import '../../css/w/wt0p3kbqh.css';
import '../../css/j/jzn7vac9q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path clip-rule="evenodd" class="kegbqu6mm"/><path class="jz9fog4wa"/><path class="wt0p3kbqh"/><path class="jzn7vac9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:webcam-pop"} {...others} />);
}

export default Component;
