import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jehqprakg.css';
import '../../css/g/g3r-5n4tt.css';
import '../../css/p/pzb_wabum.css';
import '../../css/d/d09--6peh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jehqprakg"/><path class="g3r-5n4tt"/><path clip-rule="evenodd" class="pzb_wabum"/><path clip-rule="evenodd" class="d09--6peh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-add-outline"} {...others} />);
}

export default Component;
