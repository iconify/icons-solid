import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu-koxf9j.css';
import '../../css/c/c3l_2jbrp.css';
import '../../css/g/g2-0-bchb.css';

const viewBox = {"width":544,"height":540,"left":-32,"top":-79};
const content = `<g class="uu-koxf9j"><path class="c3l_2jbrp"/><path class="g2-0-bchb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:monitixx"} {...others} />);
}

export default Component;
