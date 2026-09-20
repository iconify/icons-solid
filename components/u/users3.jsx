import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7-ubbcgv.css';
import '../../css/g/g0uevob0y.css';
import '../../css/r/rzuh_2b1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s7-ubbcgv"/><path class="g0uevob0y"/><path clip-rule="evenodd" class="rzuh_2b1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:users3"} {...others} />);
}

export default Component;
