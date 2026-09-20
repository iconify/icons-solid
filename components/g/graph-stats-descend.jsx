import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lguo6pbwg.css';
import '../../css/d/dwerxxbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lguo6pbwg"/><path class="dwerxxbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:graph-stats-descend"} {...others} />);
}

export default Component;
