import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hsi9apijf.css';
import '../../css/b/b0xtd884y.css';
import '../../css/j/jm47mgbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hsi9apijf"/><path class="b0xtd884y"/><path clip-rule="evenodd" class="jm47mgbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:send-clock"} {...others} />);
}

export default Component;
