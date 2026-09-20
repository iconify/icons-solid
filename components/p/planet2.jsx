import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dptxcnlku.css';
import '../../css/u/uzse2xbth.css';
import '../../css/k/k3_d2ccnw.css';
import '../../css/o/oa2rpaclt.css';
import '../../css/c/c132rpbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dptxcnlku"/><path clip-rule="evenodd" class="uzse2xbth"/><path class="k3_d2ccnw"/><path class="oa2rpaclt"/><path class="c132rpbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:planet2"} {...others} />);
}

export default Component;
