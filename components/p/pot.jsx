import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ej5yk81ft.css';
import '../../css/p/p3q3wurqs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ej5yk81ft"/><path class="p3q3wurqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:pot"} {...others} />);
}

export default Component;
