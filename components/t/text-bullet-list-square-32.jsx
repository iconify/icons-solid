import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9_nd9bsv.css';
import '../../css/b/b1i5nrbzy.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/c/c8pavbbjd.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y8pwr279m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGklx3zJXo)" class="t9_nd9bsv"/><path fill="url(#SVGdi1M5dPd)" class="b1i5nrbzy"/><defs><linearGradient id="SVGklx3zJXo" x1="3.929" x2="21.872" y1="7.875" y2="26.517" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset="1" class="c8pavbbjd"/></linearGradient><linearGradient id="SVGdi1M5dPd" x1="11.692" x2="21.978" y1="10.077" y2="34.999" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y8pwr279m"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:text-bullet-list-square-32"} {...others} />);
}

export default Component;
