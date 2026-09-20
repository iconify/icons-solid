import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8r_674nc.css';
import '../../css/z/z09ukdbfo.css';
import '../../css/v/vt575fbgo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h8r_674nc"/><path clip-rule="evenodd" class="z09ukdbfo"/><path class="vt575fbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:skull-2-flat"} {...others} />);
}

export default Component;
