import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y569lwvon.css';
import '../../css/v/vh7rscb6d.css';
import '../../css/f/ft1-f8bbq.css';
import '../../css/g/g646koo5e.css';
import '../../css/x/x6t69_b1d.css';
import '../../css/l/lnw1qlbhk.css';
import '../../css/z/zc-0ysodk.css';
import '../../css/m/mp3ufbweq.css';
import '../../css/w/wr4enrogi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow y569lwvon"/><path class="vh7rscb6d wm-shadow"/><path class="ft1-f8bbq"/><path class="g646koo5e"/><path class="x6t69_b1d"/><path class="lnw1qlbhk"/><path class="wm-shine zc-0ysodk"/><path class="mp3ufbweq wm-shine"/><path class="wr4enrogi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:tornado"} {...others} />);
}

export default Component;
