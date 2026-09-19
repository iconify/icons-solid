import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zg5iq6b1m.css';
import '../../css/z/z0l8-t28l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zg5iq6b1m"/><rect class="z0l8-t28l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:smoking"} {...others} />);
}

export default Component;
