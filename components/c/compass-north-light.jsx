import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/b-r8pffbr.css';
import '../../css/i/iina63bcq.css';
import '../../css/c/c9w1ambxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="b-r8pffbr"/><path class="iina63bcq"/><path class="c9w1ambxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass-north-light"} {...others} />);
}

export default Component;
