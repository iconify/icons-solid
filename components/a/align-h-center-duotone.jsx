import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwnhso7ti.css';
import '../../css/r/rsgd5xbzn.css';
import '../../css/w/wcnkyxb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cwnhso7ti"/><path class="rsgd5xbzn"/><path class="wcnkyxb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:align-h-center-duotone"} {...others} />);
}

export default Component;
