import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xmx9zi21u.css';
import '../../css/l/l8z7n1gta.css';
import '../../css/b/b-h0r-bhn.css';
import '../../css/q/q505187yx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xmx9zi21u"/><path class="l8z7n1gta"/><path clip-rule="evenodd" class="b-h0r-bhn"/><path clip-rule="evenodd" class="q505187yx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:flower-circle"} {...others} />);
}

export default Component;
