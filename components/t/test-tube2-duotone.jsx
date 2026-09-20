import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znqf-1eyg.css';
import '../../css/p/pwv66hiqu.css';
import '../../css/t/ts9kdub8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="znqf-1eyg"/><path clip-rule="evenodd" class="pwv66hiqu"/><path class="ts9kdub8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:test-tube2-duotone"} {...others} />);
}

export default Component;
