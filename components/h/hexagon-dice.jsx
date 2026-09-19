import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/s_ho3ac6o.css';
import '../../css/u/uybgto0ku.css';
import '../../css/t/trcn_rbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="s_ho3ac6o"/><path class="uybgto0ku"/><path class="trcn_rbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hexagon-dice"} {...others} />);
}

export default Component;
