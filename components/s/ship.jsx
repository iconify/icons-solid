import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v-iczrbge.css';
import '../../css/m/mz2dbkb5p.css';
import '../../css/s/svve6qvgh.css';
import '../../css/g/g5f60rbdn.css';
import '../../css/c/cyrdvd-pk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v-iczrbge wm-shadow"/><path class="mz2dbkb5p"/><path class="svve6qvgh"/><path class="g5f60rbdn"/><path class="cyrdvd-pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:ship"} {...others} />);
}

export default Component;
