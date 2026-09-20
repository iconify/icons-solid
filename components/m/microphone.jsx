import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h42y1hklo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whdusle5c.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGxKSufc7L" class="h42y1hklo"/></defs><g class="ft5dv1b6b"><use href="#SVGxKSufc7L"/><use href="#SVGxKSufc7L"/><use href="#SVGxKSufc7L"/><path class="whdusle5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:microphone"} {...others} />);
}

export default Component;
