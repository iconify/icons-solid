import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oew13bbxd.css';
import '../../css/x/x53pk-bhg.css';
import '../../css/o/oxupixzhe.css';
import '../../css/f/fcplvcczx.css';
import '../../css/s/sigw5-b8p.css';
import '../../css/h/hvdivdizi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oew13bbxd wm-shadow"/><path class="x53pk-bhg"/><path class="oxupixzhe"/><path class="fcplvcczx"/><path class="sigw5-b8p"/><path class="hvdivdizi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:spider-web"} {...others} />);
}

export default Component;
