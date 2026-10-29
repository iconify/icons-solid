import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr4d53blp.css';
import '../../css/f/f4exignev.css';
import '../../css/c/csbikjtvl.css';
import '../../css/q/qaq2cubie.css';
import '../../css/r/r-q-7etgf.css';
import '../../css/n/nmfxv_1ts.css';
import '../../css/b/bwnpk1bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tr4d53blp wm-shadow"/><path class="f4exignev wm-shadow"/><path class="csbikjtvl"/><path class="qaq2cubie"/><path class="r-q-7etgf"/><path class="nmfxv_1ts"/><path class="bwnpk1bqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:crosshair"} {...others} />);
}

export default Component;
