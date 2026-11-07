import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqtyd2syu.css';
import '../../css/t/tzom42bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bqtyd2syu"/><path class="tzom42bgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-heart-minimalistic-bold"} {...others} />);
}

export default Component;
