import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-0vqqb8n.css';
import '../../css/z/z056yni2z.css';
import '../../css/b/b3t-2tbol.css';
import '../../css/m/mer0f0bpl.css';
import '../../css/d/dpsiiab0r.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGgUNRoefK" class="e-0vqqb8n"/></defs><path class="z056yni2z"/><path class="b3t-2tbol"/><path class="mer0f0bpl"/><use href="#SVGgUNRoefK"/><use href="#SVGgUNRoefK" class="dpsiiab0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:keyboard"} {...others} />);
}

export default Component;
