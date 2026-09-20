import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo-32ebci.css';
import '../../css/t/ttngxubar.css';
import '../../css/d/d9_o2bcdy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fo-32ebci"/><path class="ttngxubar"/><path clip-rule="evenodd" class="d9_o2bcdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:store-1-flat"} {...others} />);
}

export default Component;
