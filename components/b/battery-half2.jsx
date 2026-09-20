import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-xldtp5u.css';
import '../../css/y/yhp6z-bco.css';
import '../../css/h/huq9i0-2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="h-xldtp5u"/><path clip-rule="evenodd" class="yhp6z-bco"/><path class="huq9i0-2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:battery-half2"} {...others} />);
}

export default Component;
