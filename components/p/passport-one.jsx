import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/a83-n7b5d.css';
import '../../css/w/wi2d75bbx.css';
import '../../css/l/lnl1wm-up.css';
import '../../css/d/dgogtjsii.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="a83-n7b5d"/><rect transform="rotate(-90 13 44)" class="wi2d75bbx"/><circle class="lnl1wm-up"/><path class="dgogtjsii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:passport-one"} {...others} />);
}

export default Component;
