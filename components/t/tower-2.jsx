import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cht72sbxm.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGviYHfcjm" class="cht72sbxm"/></defs><g class="ft5dv1b6b"><use href="#SVGviYHfcjm"/><use href="#SVGviYHfcjm" class="av3m8fbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tower-2"} {...others} />);
}

export default Component;
