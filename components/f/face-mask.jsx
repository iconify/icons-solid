import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gyl3vgbry.css';
import '../../css/p/pe0rqh1fx.css';
import '../../css/h/hnjddtvml.css';
import '../../css/u/utbrxbchh.css';
import '../../css/j/jf4v6qxjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gyl3vgbry"/><path class="pe0rqh1fx"/><path class="hnjddtvml"/><path class="utbrxbchh"/><path class="jf4v6qxjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:face-mask"} {...others} />);
}

export default Component;
