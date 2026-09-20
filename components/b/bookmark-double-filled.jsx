import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cza95wglm.css';
import '../../css/m/mrmylhbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cza95wglm"/><path class="mrmylhbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bookmark-double-filled"} {...others} />);
}

export default Component;
