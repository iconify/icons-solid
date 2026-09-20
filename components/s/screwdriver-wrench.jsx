import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdo84dqsf.css';
import '../../css/p/ptfjfdcgn.css';
import '../../css/y/ycxup5_7u.css';
import '../../css/b/bfx-gtbim.css';
import '../../css/d/dl8n0r7ub.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cdo84dqsf"/><path class="ptfjfdcgn"/><path class="ycxup5_7u"/><path class="bfx-gtbim"/><path class="dl8n0r7ub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:screwdriver-wrench"} {...others} />);
}

export default Component;
