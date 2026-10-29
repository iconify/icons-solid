import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vzl1p1bpj.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/g/gdk50x15v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vzl1p1bpj wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="gdk50x15v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-blueprint"} {...others} />);
}

export default Component;
