import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yh3mxgbbp.css';
import '../../css/u/uw6l9ps6y.css';
import '../../css/m/ms_sg3b9n.css';
import '../../css/n/nlwq2ybyg.css';
import '../../css/n/nqd2is77x.css';
import '../../css/l/lz5-j5cdf.css';
import '../../css/i/iac_3dbae.css';
import '../../css/d/d3bk07c8y.css';
import '../../css/i/ivj36gbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yh3mxgbbp"/><path class="uw6l9ps6y wm-a"/><path class="ms_sg3b9n wm-deco"/><path class="nlwq2ybyg wm-k"/><path class="nqd2is77x wm-a"/><path class="lz5-j5cdf wm-shadow"/><path class="iac_3dbae wm-shine"/><path class="d3bk07c8y wm-shine"/><path class="ivj36gbzn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:files"} {...others} />);
}

export default Component;
