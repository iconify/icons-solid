import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p-w3owbpc.css';
import '../../css/w/wk0yq0bkm.css';
import '../../css/e/eak60cb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="p-w3owbpc"/><path class="wk0yq0bkm"/><path class="eak60cb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-linear"} {...others} />);
}

export default Component;
