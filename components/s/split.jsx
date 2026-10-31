import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dzlq0sb-b.css';
import '../../css/d/d9xn-ccwj.css';
import '../../css/u/ul-tx9b-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dzlq0sb-b wm-k"/><path class="d9xn-ccwj wm-a"/><path class="ul-tx9b-t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:split"} {...others} />);
}

export default Component;
