import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w7s0n2bmd.css';
import '../../css/i/imb_7dwlp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w7s0n2bmd"/><path class="imb_7dwlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rotate-cw-square"} {...others} />);
}

export default Component;
