import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rdm7swbci.css';
import '../../css/w/wu226ccgn.css';
import '../../css/h/h4kim_4pi.css';
import '../../css/y/yur9gvbnw.css';
import '../../css/o/ogvhkob-h.css';
import '../../css/l/lkafr4bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rdm7swbci wm-shadow"/><path class="wu226ccgn"/><path class="h4kim_4pi"/><path class="yur9gvbnw"/><path class="ogvhkob-h"/><path class="lkafr4bxd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:volume-off"} {...others} />);
}

export default Component;
