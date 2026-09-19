import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a5zg-ob-o.css';
import '../../css/d/dcdwkgbts.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect class="a5zg-ob-o"/><path class="dcdwkgbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lock-locked-stroke-16"} {...others} />);
}

export default Component;
