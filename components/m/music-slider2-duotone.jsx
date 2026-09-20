import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ge4ttbaxi.css';
import '../../css/p/p1fwh-1ln.css';
import '../../css/u/u3vs50bgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ge4ttbaxi"/><path clip-rule="evenodd" class="p1fwh-1ln"/><path class="u3vs50bgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-slider2-duotone"} {...others} />);
}

export default Component;
