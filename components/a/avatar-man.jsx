import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dd5nousqh.css';
import '../../css/s/shgxx2n3r.css';
import '../../css/c/c8owehb2s.css';
import '../../css/z/zoigxwbii.css';
import '../../css/s/s8z1hogeo.css';
import '../../css/k/koa0g7q8o.css';
import '../../css/f/fi7vb5amg.css';
import '../../css/b/b9ih10bjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dd5nousqh wm-shadow"/><path class="shgxx2n3r"/><path class="c8owehb2s"/><path class="zoigxwbii"/><path class="s8z1hogeo"/><path class="koa0g7q8o"/><path class="fi7vb5amg"/><path class="b9ih10bjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-man"} {...others} />);
}

export default Component;
