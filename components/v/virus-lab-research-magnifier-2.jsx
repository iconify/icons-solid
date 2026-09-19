import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hu8uf7hxg.css';
import '../../css/x/xf1x-utxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hu8uf7hxg"/><path class="xf1x-utxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:virus-lab-research-magnifier-2"} {...others} />);
}

export default Component;
