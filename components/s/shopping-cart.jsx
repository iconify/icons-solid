import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nx1-1iowi.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nx1-1iowi"/><path class="czbbm17fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-cart"} {...others} />);
}

export default Component;
