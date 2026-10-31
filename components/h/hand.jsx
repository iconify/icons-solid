import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvrlq6qle.css';
import '../../css/a/aukbs4kaf.css';
import '../../css/q/qylca2bjd.css';
import '../../css/h/hgoy0euar.css';
import '../../css/l/l2j7su36n.css';
import '../../css/q/qycwp2bur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cvrlq6qle wm-shadow"/><path class="aukbs4kaf"/><path class="qylca2bjd"/><path class="hgoy0euar"/><path class="l2j7su36n"/><path class="qycwp2bur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hand"} {...others} />);
}

export default Component;
