import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/odtya-b3r.css';
import '../../css/w/w_1d0j57s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="odtya-b3r"/><path class="w_1d0j57s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:axe"} {...others} />);
}

export default Component;
