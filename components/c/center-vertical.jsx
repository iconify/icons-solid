import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q08khjbwt.css';
import '../../css/j/jc6w6-bos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q08khjbwt"/><rect transform="matrix(0 -1 -1 0 18.5 15)" class="jc6w6-bos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:center-vertical"} {...others} />);
}

export default Component;
