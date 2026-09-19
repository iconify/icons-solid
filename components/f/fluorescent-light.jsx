import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9w-mkcdb.css';
import '../../css/p/pvotfl8ci.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGDMFyGe9Y)" class="cuyn6tgcc"><path class="r9w-mkcdb"/></g><defs><clipPath id="SVGDMFyGe9Y"><path class="pvotfl8ci"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:fluorescent-light"} {...others} />);
}

export default Component;
