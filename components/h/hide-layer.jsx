import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/t7dcslbnl.css';
import '../../css/w/wjrrn-bha.css';
import '../../css/s/s-ar71bvn.css';
import '../../css/d/de1ktybrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="t7dcslbnl"/><path class="wjrrn-bha"/><path class="s-ar71bvn"/><path class="de1ktybrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hide-layer"} {...others} />);
}

export default Component;
