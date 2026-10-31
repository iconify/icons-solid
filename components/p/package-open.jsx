import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xofhu0bkr.css';
import '../../css/o/o3xfxl7tk.css';
import '../../css/u/ur2yipy4x.css';
import '../../css/v/v5g6h_9im.css';
import '../../css/o/ofo3mg8-s.css';
import '../../css/w/w7rxoybdq.css';
import '../../css/s/sip5yq8nc.css';
import '../../css/k/kgxzc-w8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xofhu0bkr"/><path class="o3xfxl7tk wm-a"/><path class="ur2yipy4x wm-deco"/><path class="v5g6h_9im wm-k"/><path class="ofo3mg8-s wm-a"/><path class="w7rxoybdq wm-shadow"/><path class="sip5yq8nc wm-shine"/><path class="kgxzc-w8j wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:package-open"} {...others} />);
}

export default Component;
