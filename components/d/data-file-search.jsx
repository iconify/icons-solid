import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/evmm6jjbj.css';
import '../../css/w/wq_ubmn5r.css';
import '../../css/y/y-1lieb2p.css';
import '../../css/n/n8zq3nb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="evmm6jjbj"/><path class="wq_ubmn5r"/><path class="y-1lieb2p"/><path class="n8zq3nb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-file-search"} {...others} />);
}

export default Component;
