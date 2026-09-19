import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-jo3d9_a.css';
import '../../css/f/f7bx2zbyl.css';
import '../../css/w/wlr77q6kn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-jo3d9_a"/><path class="f7bx2zbyl"/><path class="wlr77q6kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-layer"} {...others} />);
}

export default Component;
