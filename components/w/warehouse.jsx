import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qw_8fzb8b.css';
import '../../css/s/s7o03ibyd.css';
import '../../css/o/otfxoeynd.css';
import '../../css/o/o4uii-bhq.css';
import '../../css/d/d6uoor03l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qw_8fzb8b"/><path class="s7o03ibyd"/><path class="otfxoeynd"/><path class="o4uii-bhq"/><path class="d6uoor03l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:warehouse"} {...others} />);
}

export default Component;
