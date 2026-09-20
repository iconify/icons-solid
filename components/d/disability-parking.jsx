import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hb9vm4bqe.css';
import '../../css/j/jl-yugtwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hb9vm4bqe"/><path class="jl-yugtwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:disability-parking"} {...others} />);
}

export default Component;
