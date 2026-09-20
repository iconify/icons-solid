import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrhbj8boa.css';
import '../../css/p/pxi68155h.css';
import '../../css/z/z04drlb1l.css';
import '../../css/z/zi5n31bru.css';
import '../../css/f/fex84958v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yrhbj8boa"/><path class="pxi68155h"/><g class="z04drlb1l"><path class="zi5n31bru"/><path class="fex84958v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:deciduous-tree"} {...others} />);
}

export default Component;
