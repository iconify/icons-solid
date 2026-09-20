import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7vy64bnv.css';
import '../../css/q/q_02szb5c.css';

const viewBox = {"width":32,"height":32};
const content = `<defs><path id="SVGLuCnNb4Q" class="w7vy64bnv"/></defs><path class="q_02szb5c"/><use href="#SVGLuCnNb4Q"/><use href="#SVGLuCnNb4Q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-css-open"} {...others} />);
}

export default Component;
