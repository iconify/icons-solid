import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/y7ug80b_w.css';
import '../../css/l/lrma0ps3x.css';
import '../../css/t/tk5w-tb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="y7ug80b_w"/><path class="lrma0ps3x"/><path class="tk5w-tb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:layer-hide"} {...others} />);
}

export default Component;
