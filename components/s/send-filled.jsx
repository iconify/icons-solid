import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il_najbxg.css';
import '../../css/n/n1lsf0bnc.css';

const viewBox = {"width":16,"height":16};
const content = `<defs><path id="SVG2jlUvrhl" class="il_najbxg"/></defs><g clip-rule="evenodd" class="n1lsf0bnc"><use href="#SVG2jlUvrhl"/><use href="#SVG2jlUvrhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:send-filled"} {...others} />);
}

export default Component;
