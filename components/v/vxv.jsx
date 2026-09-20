import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxm86wb9r.css';
import '../../css/j/j7x77swvu.css';
import '../../css/h/hagay2vjp.css';
import '../../css/a/aejponlie.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pxm86wb9r"/><path clip-rule="evenodd" class="j7x77swvu"/><path class="hagay2vjp"/><path class="aejponlie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vxv"} {...others} />);
}

export default Component;
