import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyxl8dbgf.css';
import '../../css/b/buduld4sj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uyxl8dbgf"/><path class="buduld4sj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-add"} {...others} />);
}

export default Component;
