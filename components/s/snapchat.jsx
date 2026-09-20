import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyuqmjbvt.css';
import '../../css/v/vto5gdbcx.css';
import '../../css/h/hmitehp6t.css';
import '../../css/m/mxy__0bzi.css';

const viewBox = {"width":514.631,"height":514.631,"left":147.353,"top":39.286};
const content = `<path class="uyuqmjbvt"/><path class="vto5gdbcx"/><path class="hmitehp6t"/><path class="mxy__0bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:snapchat"} {...others} />);
}

export default Component;
