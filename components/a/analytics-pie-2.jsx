import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cs8ud_btj.css';
import '../../css/u/uo25vbcqt.css';
import '../../css/e/eisbshiwy.css';
import '../../css/k/kffjcv7xg.css';
import '../../css/k/ktl_hnbzp.css';
import '../../css/h/h66wgibmy.css';
import '../../css/k/ktedumbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cs8ud_btj"/><path class="uo25vbcqt"/><path class="eisbshiwy"/><path class="kffjcv7xg"/><path class="ktl_hnbzp"/><path class="h66wgibmy"/><path class="ktedumbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:analytics-pie-2"} {...others} />);
}

export default Component;
