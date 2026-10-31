import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/chqc6vbhs.css';
import '../../css/a/axikvvyxz.css';
import '../../css/r/r2emqcroa.css';
import '../../css/p/pbb7ocb3r.css';
import '../../css/s/sf3_zibif.css';
import '../../css/w/w3nybubls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="chqc6vbhs wm-shadow"/><path class="axikvvyxz"/><path class="r2emqcroa"/><path class="pbb7ocb3r"/><path class="sf3_zibif"/><path class="w3nybubls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cat"} {...others} />);
}

export default Component;
