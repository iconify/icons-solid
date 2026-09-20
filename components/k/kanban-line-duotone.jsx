import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cv_bv5bue.css';
import '../../css/f/f67y05bux.css';
import '../../css/n/n7itbbc5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cv_bv5bue"/><path class="f67y05bux"/><path class="n7itbbc5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kanban-line-duotone"} {...others} />);
}

export default Component;
