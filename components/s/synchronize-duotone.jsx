import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llper-sbd.css';
import '../../css/w/w8x1mclvl.css';
import '../../css/m/myfhbqbkv.css';
import '../../css/y/ykeey4ejx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="llper-sbd"/><path class="w8x1mclvl"/><path class="myfhbqbkv"/><path class="ykeey4ejx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:synchronize-duotone"} {...others} />);
}

export default Component;
