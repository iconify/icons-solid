import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sfuzh5bsz.css';
import '../../css/r/rmgz1x_wv.css';
import '../../css/y/y9em5zpwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sfuzh5bsz"/><path class="rmgz1x_wv"/><path clip-rule="evenodd" class="y9em5zpwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:volume"} {...others} />);
}

export default Component;
