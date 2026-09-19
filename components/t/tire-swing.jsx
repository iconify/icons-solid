import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yl6j-sw3a.css';
import '../../css/w/w46zwovhm.css';
import '../../css/f/fb_cx8b6e.css';
import '../../css/z/zk8wz60ql.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="yl6j-sw3a"/><ellipse class="w46zwovhm"/><ellipse class="fb_cx8b6e"/><path class="zk8wz60ql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tire-swing"} {...others} />);
}

export default Component;
