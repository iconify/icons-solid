import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e2glyv-oe.css';
import '../../css/o/o734-xwms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e2glyv-oe"/><path class="o734-xwms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-square-05"} {...others} />);
}

export default Component;
