import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u5ed91xnv.css';
import '../../css/r/rhc0pbu7v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="u5ed91xnv"/><path class="rhc0pbu7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:blz"} {...others} />);
}

export default Component;
