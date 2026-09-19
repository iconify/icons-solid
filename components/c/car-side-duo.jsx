import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_mu90bzl.css';
import '../../css/a/aee-ic6wn.css';
import '../../css/v/v8xq717qa.css';
import '../../css/f/f_94ml52o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="n_mu90bzl"/><path class="aee-ic6wn"/><path class="v8xq717qa"/><path class="f_94ml52o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-side-duo"} {...others} />);
}

export default Component;
