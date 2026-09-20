import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8kknxbiv.css';
import '../../css/g/gtj4olbgd.css';
import '../../css/c/cu8f4bbdp.css';
import '../../css/u/umfgsn4hd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u8kknxbiv"/><path class="gtj4olbgd"/><path class="cu8f4bbdp"/><path class="umfgsn4hd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:network"} {...others} />);
}

export default Component;
