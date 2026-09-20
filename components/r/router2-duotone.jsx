import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7v_t9bbz.css';
import '../../css/h/haoflz72k.css';
import '../../css/o/o3nngpgdw.css';
import '../../css/o/o5pgrnbwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m7v_t9bbz"/><path clip-rule="evenodd" class="haoflz72k"/><path clip-rule="evenodd" class="o3nngpgdw"/><path class="o5pgrnbwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:router2-duotone"} {...others} />);
}

export default Component;
