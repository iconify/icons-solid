import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fzej-ib-h.css';
import '../../css/v/vwxsdrsmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fzej-ib-h"/><path class="vwxsdrsmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-square-06"} {...others} />);
}

export default Component;
