import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cj6bbpb_o.css';
import '../../css/a/aw74w_bdz.css';
import '../../css/g/giqk6m29x.css';
import '../../css/r/rce7lrwge.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cj6bbpb_o"/><path class="aw74w_bdz"/><path class="giqk6m29x"/><path class="rce7lrwge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:page-facing-up"} {...others} />);
}

export default Component;
