import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xi8rysb6o.css';
import '../../css/k/k2o1gebqm.css';
import '../../css/h/hjxvjzbmm.css';
import '../../css/x/xgjzbacts.css';
import '../../css/a/a-ykpnb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xi8rysb6o"/><path class="k2o1gebqm wm-shine"/><path class="hjxvjzbmm wm-k"/><path class="wm-a xgjzbacts"/><path class="a-ykpnb1v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:plum-blossom"} {...others} />);
}

export default Component;
