import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz96fzzhj.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG0kegTdID" class="yz96fzzhj"/></defs><use href="#SVG0kegTdID" transform="translate(4 4)" class="d2kvgvbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:close-outlined"} {...others} />);
}

export default Component;
