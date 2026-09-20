import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6150rhmg.css';
import '../../css/m/mkbjbvjtw.css';
import '../../css/w/ww5vvcbdd.css';
import '../../css/w/wu32awiep.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k6150rhmg"/><path class="mkbjbvjtw"/><path class="ww5vvcbdd"/><path class="wu32awiep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:watch-square-menu"} {...others} />);
}

export default Component;
