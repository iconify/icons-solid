import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmasbvbvf.css';
import '../../css/m/mrd-8mfyg.css';
import '../../css/r/rgk7elbpa.css';
import '../../css/x/xzwlyu8qv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nmasbvbvf"/><path class="mrd-8mfyg"/><path class="rgk7elbpa"/><path class="xzwlyu8qv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smiley-kiss-heart"} {...others} />);
}

export default Component;
