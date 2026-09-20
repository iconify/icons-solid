import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/dfxeknt9h.css';
import '../../css/y/y1-4fhbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="dfxeknt9h"/><path class="y1-4fhbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:computer-screen-imac-download"} {...others} />);
}

export default Component;
