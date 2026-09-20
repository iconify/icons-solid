import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-em0_zah.css';
import '../../css/y/yj5yz0rij.css';
import '../../css/p/pvl2anbys.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGJLYRnb5B)"><rect class="k-em0_zah"/><path clip-rule="evenodd" class="yj5yz0rij"/></g><defs><clipPath id="SVGJLYRnb5B"><rect class="pvl2anbys"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:selenium"} {...others} />);
}

export default Component;
