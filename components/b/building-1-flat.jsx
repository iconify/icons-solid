import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acn3b8b5o.css';
import '../../css/f/f0zgc9bgp.css';
import '../../css/d/dwuza0bqk.css';
import '../../css/m/mrsdqccxe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="acn3b8b5o"/><path clip-rule="evenodd" class="f0zgc9bgp"/><path class="dwuza0bqk"/><path clip-rule="evenodd" class="mrsdqccxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:building-1-flat"} {...others} />);
}

export default Component;
