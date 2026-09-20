import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-r24r9hl.css';
import '../../css/t/t9a55g_zp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f-r24r9hl"/><path class="t9a55g_zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-json"} {...others} />);
}

export default Component;
