import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/h37v7nb9a.css';
import '../../css/l/lc8v94brc.css';
import '../../css/j/jiukz6bpt.css';
import '../../css/k/kmr170_nv.css';
import '../../css/c/cbdh1qlag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="h37v7nb9a"/><path class="lc8v94brc"/><path class="jiukz6bpt"/><path class="kmr170_nv"/><path class="cbdh1qlag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:watch-circle-bluetooth"} {...others} />);
}

export default Component;
