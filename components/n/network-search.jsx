import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8zq3nb9u.css';
import '../../css/x/xw2i1re2n.css';
import '../../css/k/k2j__cbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n8zq3nb9u"/><path class="xw2i1re2n"/><path class="k2j__cbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-search"} {...others} />);
}

export default Component;
