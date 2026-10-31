import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vfbujob0h.css';
import '../../css/e/e2rsjzi7d.css';
import '../../css/e/e00b0o2og.css';
import '../../css/e/eypjnpb6p.css';
import '../../css/e/exlc4bbvh.css';
import '../../css/f/f3572mbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vfbujob0h wm-shadow"/><path class="e2rsjzi7d wm-shadow"/><path class="e00b0o2og"/><path class="eypjnpb6p"/><path class="exlc4bbvh"/><path class="f3572mbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bandage"} {...others} />);
}

export default Component;
