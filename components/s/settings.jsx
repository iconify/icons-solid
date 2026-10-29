import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a85sefb4k.css';
import '../../css/i/inj6hog6g.css';
import '../../css/x/xt0z22c6j.css';
import '../../css/d/d9groeb2z.css';
import '../../css/j/jgd314h9o.css';
import '../../css/f/fg8nu4rpi.css';
import '../../css/l/lz-yr85oe.css';
import '../../css/h/h-_zv6bgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a85sefb4k wm-k"/><path class="inj6hog6g wm-k"/><path class="wm-k xt0z22c6j"/><path class="d9groeb2z wm-shine"/><path class="jgd314h9o wm-a"/><path class="fg8nu4rpi wm-a"/><path class="lz-yr85oe wm-a"/><path class="h-_zv6bgs wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:settings"} {...others} />);
}

export default Component;
