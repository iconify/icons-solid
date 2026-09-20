import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxo7keb8z.css';
import '../../css/n/nqdxo0gwd.css';
import '../../css/m/mk3him89g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wxo7keb8z"/><path class="nqdxo0gwd"/><path class="mk3him89g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bank"} {...others} />);
}

export default Component;
