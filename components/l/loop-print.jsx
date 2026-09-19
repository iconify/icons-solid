import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w09lmnx4l.css';
import '../../css/e/eicihhp-u.css';
import '../../css/s/s2w7n_bit.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w09lmnx4l"/><path clip-rule="evenodd" class="eicihhp-u"/><path class="s2w7n_bit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:loop-print"} {...others} />);
}

export default Component;
