import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_v2uybww.css';
import '../../css/h/h02x7zt_x.css';
import '../../css/x/x4jwlob4g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u_v2uybww"/><path clip-rule="evenodd" class="h02x7zt_x"/><path clip-rule="evenodd" class="x4jwlob4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shredder-flat"} {...others} />);
}

export default Component;
