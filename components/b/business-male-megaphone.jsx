import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyeb2ub6b.css';
import '../../css/l/lvbytobuw.css';
import '../../css/i/il_w3lb9x.css';
import '../../css/s/swcafebnn.css';
import '../../css/s/sva1zl7tw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gyeb2ub6b"/><path class="lvbytobuw"/><path class="il_w3lb9x"/><path class="swcafebnn"/><path class="sva1zl7tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-male-megaphone"} {...others} />);
}

export default Component;
