import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/ybzfri8sn.css';
import '../../css/q/q10c8qqak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="ybzfri8sn"/><path class="q10c8qqak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:refresh-outline"} {...others} />);
}

export default Component;
