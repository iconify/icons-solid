import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4b3dxbet.css';
import '../../css/e/eb8lqwt7o.css';
import '../../css/h/hjiddcc1v.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/t-u7kqb7p.css';
import '../../css/w/wukp4qbcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q4b3dxbet"/><path class="eb8lqwt7o"/><path class="hjiddcc1v"/><g class="xtpeb-edw"><path class="t-u7kqb7p"/><path class="wukp4qbcf"/></g><g class="xtpeb-edw"><path class="t-u7kqb7p"/><path class="wukp4qbcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-bold-duotone"} {...others} />);
}

export default Component;
