import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ambn2z-ng.css';
import '../../css/h/hx4kybc4s.css';
import '../../css/f/fa4vybbik.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ambn2z-ng"/><path clip-rule="evenodd" class="hx4kybc4s"/><path class="fa4vybbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:controller-1-flat"} {...others} />);
}

export default Component;
