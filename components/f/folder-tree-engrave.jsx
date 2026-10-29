import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ec78oob8p.css';
import '../../css/h/hkqlfx1bz.css';
import '../../css/x/xaymihi1d.css';
import '../../css/w/wri5opbdz.css';
import '../../css/u/uanjz8m2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ec78oob8p wm-k"/><path class="hkqlfx1bz wm-a"/><path class="wm-shadow xaymihi1d"/><path class="wm-k wri5opbdz"/><path class="uanjz8m2o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-tree-engrave"} {...others} />);
}

export default Component;
