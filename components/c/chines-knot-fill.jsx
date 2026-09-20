import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b52jpbbmn.css';
import '../../css/w/w-s1ovkba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="b52jpbbmn"/><path class="w-s1ovkba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chines-knot-fill"} {...others} />);
}

export default Component;
