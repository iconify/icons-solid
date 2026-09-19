import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz7dlcc-l.css';
import '../../css/d/dhqx3vboc.css';
import '../../css/b/b87hwbboa.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="tz7dlcc-l"><path class="dhqx3vboc"/><path class="b87hwbboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:javascript"} {...others} />);
}

export default Component;
