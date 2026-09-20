import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iacwmfb0y.css';
import '../../css/f/fb7w0qbrc.css';
import '../../css/r/rxs9aqbon.css';
import '../../css/b/brt5hcczb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iacwmfb0y"/><path class="fb7w0qbrc"/><path class="rxs9aqbon"/><path class="brt5hcczb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:star-fall-duotone"} {...others} />);
}

export default Component;
