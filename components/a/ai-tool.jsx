import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eglqej6yx.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/a/a8e9apjvn.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG50KS6Lfb" class="eglqej6yx"/></defs><g class="ft5dv1b6b"><use href="#SVG50KS6Lfb"/><use href="#SVG50KS6Lfb" class="av3m8fbrw"/><path class="a8e9apjvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-tool"} {...others} />);
}

export default Component;
