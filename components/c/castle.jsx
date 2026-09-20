import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cg5arnbii.css';
import '../../css/s/s6guj0b5i.css';
import '../../css/q/qpdqhq7ws.css';
import '../../css/l/lz5m43bjs.css';
import '../../css/p/pyef2yfqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cg5arnbii"/><path class="s6guj0b5i"/><path class="qpdqhq7ws"/><path class="lz5m43bjs"/><path class="pyef2yfqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:castle"} {...others} />);
}

export default Component;
