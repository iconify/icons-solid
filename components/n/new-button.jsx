import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk-o4xbvq.css';
import '../../css/l/lbifckknp.css';
import '../../css/t/tng-zhj-p.css';
import '../../css/a/akhdmbcky.css';

const viewBox = {"width":72,"height":72};
const content = `<rect transform="translate(0 -.014)" class="xk-o4xbvq"/><g transform="translate(0 -.014)" class="lbifckknp"><path clip-rule="evenodd" class="tng-zhj-p"/><rect class="akhdmbcky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:new-button"} {...others} />);
}

export default Component;
