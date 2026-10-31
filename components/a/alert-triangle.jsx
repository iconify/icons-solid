import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dze1-l9fl.css';
import '../../css/w/wrmwqb5js.css';
import '../../css/y/y95u7bcnw.css';
import '../../css/d/dxcq5igqz.css';
import '../../css/a/asub5-mbu.css';
import '../../css/b/bj9il7cos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dze1-l9fl wm-shadow"/><path class="wrmwqb5js"/><path class="y95u7bcnw"/><path class="dxcq5igqz"/><path class="asub5-mbu"/><path class="bj9il7cos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:alert-triangle"} {...others} />);
}

export default Component;
