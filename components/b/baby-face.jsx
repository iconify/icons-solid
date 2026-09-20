import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brnao9b7r.css';
import '../../css/w/wibvtsivr.css';
import '../../css/n/nah5b0b_i.css';
import '../../css/j/jd_6jgbxd.css';
import '../../css/i/i8vbqq50v.css';
import '../../css/w/w81tsc9ky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="brnao9b7r"/><path class="wibvtsivr"/><path class="nah5b0b_i"/><path class="jd_6jgbxd"/><path class="i8vbqq50v"/><path class="w81tsc9ky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:baby-face"} {...others} />);
}

export default Component;
