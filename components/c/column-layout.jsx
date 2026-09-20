import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhj8dzb9x.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGmXkTueIg" class="dhj8dzb9x"/></defs><g class="ft5dv1b6b"><use href="#SVGmXkTueIg"/><use href="#SVGmXkTueIg" class="av3m8fbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:column-layout"} {...others} />);
}

export default Component;
