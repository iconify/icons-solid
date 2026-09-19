import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us69ekaff.css';
import '../../css/j/j1knqabfg.css';
import '../../css/y/yzfmtgvys.css';
import '../../css/a/a9gh-ccxe.css';
import '../../css/k/kc3tusbmk.css';
import '../../css/n/n_soofl_f.css';
import '../../css/w/w7nt8dbfw.css';
import '../../css/s/s3fwhflel.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="us69ekaff"/><path class="j1knqabfg"/><path class="yzfmtgvys"/><path class="a9gh-ccxe"/><path class="kc3tusbmk"/><path class="n_soofl_f"/><path class="w7nt8dbfw"/><path class="s3fwhflel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-compress-quad-bold"} {...others} />);
}

export default Component;
