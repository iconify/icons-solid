import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mn62l3n5r.css';
import '../../css/y/yx6v_jgke.css';
import '../../css/c/cb8u71hty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mn62l3n5r"/><path class="yx6v_jgke"/><path class="cb8u71hty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-off-01"} {...others} />);
}

export default Component;
