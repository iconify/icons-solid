import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xa4lx_b1x.css';
import '../../css/a/ahi--3boy.css';
import '../../css/o/o3owdebtz.css';
import '../../css/w/wpt4tnb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xa4lx_b1x"/><path class="ahi--3boy"/><path class="o3owdebtz"/><path class="wpt4tnb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chair-2-linear"} {...others} />);
}

export default Component;
