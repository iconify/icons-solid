import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pfbwf-bvy.css';
import '../../css/a/a-5rc9ati.css';
import '../../css/i/i77vq2b6o.css';
import '../../css/j/jibe7abtl.css';
import '../../css/m/mw1p3sb5m.css';
import '../../css/h/he8eo_cit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pfbwf-bvy"/><path class="a-5rc9ati"/><path class="i77vq2b6o"/><path class="jibe7abtl"/><path class="mw1p3sb5m"/><path class="he8eo_cit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:owl"} {...others} />);
}

export default Component;
