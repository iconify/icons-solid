import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yh-wljn8i.css';
import '../../css/h/ha2goljbj.css';
import '../../css/s/s56f-eqng.css';
import '../../css/y/y-nrqgbpl.css';
import '../../css/g/gxtectbxj.css';
import '../../css/k/koy0jjczv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yh-wljn8i"/><path class="ha2goljbj"/><path class="s56f-eqng"/><path class="y-nrqgbpl"/><path class="gxtectbxj"/><path class="koy0jjczv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:tooth-crown"} {...others} />);
}

export default Component;
