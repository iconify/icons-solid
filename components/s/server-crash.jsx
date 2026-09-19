import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w-b568bty.css';
import '../../css/m/mw-8r82fo.css';
import '../../css/a/abgj0wbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w-b568bty"/><path class="mw-8r82fo"/><path class="abgj0wbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:server-crash"} {...others} />);
}

export default Component;
