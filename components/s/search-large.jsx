import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pj-66_bjr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pj-66_bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:search-large"} {...others} />);
}

export default Component;
