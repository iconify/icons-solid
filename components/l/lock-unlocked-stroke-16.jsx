import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/k4gukjrlv.css';
import '../../css/a/a5zg-ob-o.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="k4gukjrlv"/><rect class="a5zg-ob-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lock-unlocked-stroke-16"} {...others} />);
}

export default Component;
