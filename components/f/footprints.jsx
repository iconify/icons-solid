import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrdyzf9pv.css';
import '../../css/f/fz5d15jge.css';
import '../../css/f/f50jykb7w.css';
import '../../css/t/toe_c2bda.css';
import '../../css/z/z8ak64v8k.css';
import '../../css/i/i_o_493fy.css';
import '../../css/c/c08alrd_o.css';
import '../../css/d/dday0m07y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xrdyzf9pv"/><path class="fz5d15jge wm-k"/><path class="f50jykb7w wm-k"/><path class="toe_c2bda wm-k"/><path class="wm-k z8ak64v8k"/><path class="i_o_493fy wm-k"/><path class="c08alrd_o wm-shine"/><path class="dday0m07y wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:footprints"} {...others} />);
}

export default Component;
