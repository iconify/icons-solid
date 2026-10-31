import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yjje-hxws.css';
import '../../css/d/d5y6e3b9g.css';
import '../../css/s/svfvjsmhx.css';
import '../../css/h/h3m6_7bty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yjje-hxws"/><path class="d5y6e3b9g wm-shadow"/><path class="svfvjsmhx"/><path class="h3m6_7bty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:trash"} {...others} />);
}

export default Component;
