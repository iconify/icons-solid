import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhz01_o5b.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG8KAPOcZt" class="nhz01_o5b"/></defs><use href="#SVG8KAPOcZt" transform="translate(2 4)" class="d2kvgvbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:imac-outlined"} {...others} />);
}

export default Component;
