import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fk1cwvbyo.css';
import '../../css/j/j246-ubvw.css';
import '../../css/h/huq9i0-2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fk1cwvbyo"/><path clip-rule="evenodd" class="j246-ubvw"/><path class="huq9i0-2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:battery-low2"} {...others} />);
}

export default Component;
