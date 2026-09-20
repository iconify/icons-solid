import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxex86b3k.css';
import '../../css/n/n_n65fbvz.css';
import '../../css/p/pvl2anbys.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGJLYRnb5B)" class="rxex86b3k"><path class="n_n65fbvz"/></g><defs><clipPath id="SVGJLYRnb5B"><rect class="pvl2anbys"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:robloxstudio"} {...others} />);
}

export default Component;
