import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pfb8fp7ae.css';
import '../../css/s/sy_i2yb_t.css';
import '../../css/m/mxmh-727a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pfb8fp7ae"/><path class="sy_i2yb_t"/><path class="mxmh-727a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:link6"} {...others} />);
}

export default Component;
