import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pjxpa7bda.css';
import '../../css/h/hb0tznocp.css';
import '../../css/i/inubnybbc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="pjxpa7bda"/><path class="hb0tznocp"/><path class="inubnybbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:logo-webhook"} {...others} />);
}

export default Component;
