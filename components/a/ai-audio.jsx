import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ffr29_hhx.css';
import '../../css/d/dg7qrmb6g.css';
import '../../css/u/u3714py3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ffr29_hhx"/><path class="dg7qrmb6g"/><path class="u3714py3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-audio"} {...others} />);
}

export default Component;
