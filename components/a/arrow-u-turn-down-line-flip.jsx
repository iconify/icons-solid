import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if52qlb1x.css';
import '../../css/e/etlfyzbfo.css';
import '../../css/u/u4ajc5b3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="if52qlb1x"/><path class="etlfyzbfo"/><path class="u4ajc5b3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-u-turn-down-line-flip"} {...others} />);
}

export default Component;
