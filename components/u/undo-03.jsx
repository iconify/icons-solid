import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvmliotit.css';
import '../../css/p/pu8wotszk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rvmliotit"/><path class="pu8wotszk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:undo-03"} {...others} />);
}

export default Component;
