import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e56-6qbwi.css';
import '../../css/e/ecvsodvvp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="e56-6qbwi"/><path class="ecvsodvvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:vrsc"} {...others} />);
}

export default Component;
