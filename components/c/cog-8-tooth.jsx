import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/ht1l0wb6z.css';
import '../../css/k/ktu665dou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ht1l0wb6z"/><path class="ktu665dou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:cog-8-tooth"} {...others} />);
}

export default Component;
