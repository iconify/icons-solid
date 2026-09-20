import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdmzqfeyj.css';
import '../../css/z/zt3xb3pls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdmzqfeyj"/><path class="zt3xb3pls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-search-filled"} {...others} />);
}

export default Component;
