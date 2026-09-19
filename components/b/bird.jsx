import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qxo-nnsxg.css';
import '../../css/p/pato6ebtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qxo-nnsxg"/><path class="pato6ebtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bird"} {...others} />);
}

export default Component;
