import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/f7r0l4_pc.css';
import '../../css/n/nj0w8c_ky.css';
import '../../css/n/nrx5hqbhr.css';
import '../../css/z/zsncxcx3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="f7r0l4_pc"/><path class="nj0w8c_ky"/><path class="nrx5hqbhr"/><path class="zsncxcx3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:brush"} {...others} />);
}

export default Component;
