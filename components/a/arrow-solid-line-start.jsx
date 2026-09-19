import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvhy3dyow.css';
import '../../css/y/ywz-ofbgu.css';
import '../../css/c/c0gb28b5d.css';
import '../../css/g/g0lu956-m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kvhy3dyow"/><path class="ywz-ofbgu"/><path class="c0gb28b5d"/><path class="g0lu956-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:arrow-solid-line-start"} {...others} />);
}

export default Component;
