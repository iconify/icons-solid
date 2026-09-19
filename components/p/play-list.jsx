import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/ky7fzbcuf.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/g/gz0j8xbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ky7fzbcuf"/><path class="jvtjbnueh"/><path class="gz0j8xbyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:play-list"} {...others} />);
}

export default Component;
