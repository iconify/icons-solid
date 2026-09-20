import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiq-_lbxp.css';
import '../../css/j/j0xfjhbdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aiq-_lbxp"/><path class="j0xfjhbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-information-2-filled"} {...others} />);
}

export default Component;
