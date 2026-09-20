import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yr7p8-cwr.css';
import '../../css/s/sigzsgz3n.css';
import '../../css/g/gxl6a-bcf.css';
import '../../css/b/bemtkfouy.css';
import '../../css/t/thrq7bcgr.css';
import '../../css/d/d-1efcc7p.css';
import '../../css/u/u8q6sqbwc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yr7p8-cwr"/><path class="sigzsgz3n"/><path class="gxl6a-bcf"/><path class="bemtkfouy"/><path class="thrq7bcgr"/><path class="d-1efcc7p"/><path class="u8q6sqbwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:no-poverty"} {...others} />);
}

export default Component;
