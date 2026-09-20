import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu3mpubxb.css';
import '../../css/h/h1yfsbbri.css';
import '../../css/s/swnd4bc0h.css';
import '../../css/g/gqpdb0bqp.css';
import '../../css/p/p1i8lv2nu.css';

const viewBox = {"width":215,"height":64};
const content = `<g class="ft5dv1b6b"><path class="cu3mpubxb"/><path clip-rule="evenodd" class="h1yfsbbri"/><path class="swnd4bc0h"/><path class="gqpdb0bqp"/><path clip-rule="evenodd" class="p1i8lv2nu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:webdotdev"} {...others} />);
}

export default Component;
