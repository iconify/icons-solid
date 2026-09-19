import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q-s1q-6-f.css';
import '../../css/t/t-nqbebwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q-s1q-6-f"/><path class="t-nqbebwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:satellite-01"} {...others} />);
}

export default Component;
