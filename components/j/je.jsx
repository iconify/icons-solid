import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/x/xyq5tcc5v.css';
import '../../css/c/c-0uoib3h.css';
import '../../css/u/uaygimvgk.css';
import '../../css/w/w26yz67qt.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path class="xyq5tcc5v"/><path class="c-0uoib3h"/><path clip-rule="evenodd" class="uaygimvgk"/><path clip-rule="evenodd" class="w26yz67qt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:je"} {...others} />);
}

export default Component;
