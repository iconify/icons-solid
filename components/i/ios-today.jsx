import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcl3y6bkj.css';
import '../../css/p/plthgm9xi.css';
import '../../css/z/zn72xdbnx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mcl3y6bkj"/><path class="plthgm9xi"/><path class="zn72xdbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-today"} {...others} />);
}

export default Component;
