import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayw-1456o.css';
import '../../css/l/lmc60tu1k.css';
import '../../css/m/mzw6-nkhy.css';
import '../../css/j/jl-bgwbnx.css';
import '../../css/m/msksc8oic.css';
import '../../css/e/e9v9i-bti.css';
import '../../css/e/e9xyj2b7y.css';
import '../../css/a/avhmx55ec.css';
import '../../css/v/vcsbzzbtc.css';
import '../../css/o/oq6w5cc4x.css';
import '../../css/r/rlfpyyb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ayw-1456o wm-a"/><path class="lmc60tu1k wm-a"/><path class="mzw6-nkhy wm-a"/><path class="jl-bgwbnx wm-k"/><path class="msksc8oic wm-k"/><path class="e9v9i-bti wm-k"/><path class="e9xyj2b7y wm-shine"/><path class="avhmx55ec wm-k"/><path class="vcsbzzbtc wm-k"/><path class="oq6w5cc4x wm-k"/><path class="rlfpyyb0q wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:sun-moon"} {...others} />);
}

export default Component;
