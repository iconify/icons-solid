import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0q8vobjd.css';
import '../../css/p/pqg7c4b2k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="f0q8vobjd"/><path class="pqg7c4b2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:logout-1"} {...others} />);
}

export default Component;
