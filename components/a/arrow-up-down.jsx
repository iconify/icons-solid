import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mvpf9y7lh.css';
import '../../css/f/f7yo3kbtn.css';
import '../../css/x/x7cf4gjvy.css';
import '../../css/u/uw90nxbzm.css';
import '../../css/z/zetx6lb3t.css';
import '../../css/e/epv168b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="mvpf9y7lh wm-shadow"/><path class="f7yo3kbtn"/><path class="x7cf4gjvy"/><path class="uw90nxbzm"/><path class="wm-shine zetx6lb3t"/><path class="epv168b8p wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-up-down"} {...others} />);
}

export default Component;
