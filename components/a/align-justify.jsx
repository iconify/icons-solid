import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/truxpdbeo.css';
import '../../css/h/hsqrkacav.css';
import '../../css/u/u5fbn2szq.css';
import '../../css/y/yy322ld4w.css';
import '../../css/y/yo-3zobrj.css';
import '../../css/p/p7xw-gnej.css';
import '../../css/b/bkq9mwb6q.css';
import '../../css/x/xk-u52bxd.css';
import '../../css/u/uwit11b1v.css';
import '../../css/z/zoh2m3ycj.css';
import '../../css/c/c7zj8pkes.css';
import '../../css/x/x243nv2lh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="truxpdbeo wm-shadow"/><path class="hsqrkacav"/><path class="u5fbn2szq"/><path class="yy322ld4w"/><path class="yo-3zobrj"/><path class="p7xw-gnej"/><path class="bkq9mwb6q"/><path class="xk-u52bxd"/><path class="uwit11b1v"/><path class="zoh2m3ycj"/><path class="c7zj8pkes wm-shine"/><path class="wm-shine x243nv2lh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:align-justify"} {...others} />);
}

export default Component;
