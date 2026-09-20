import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9dcd_-yi.css';
import '../../css/k/k132ggb9i.css';

const viewBox = {"width":400,"height":400};
const content = `<g class="ft5dv1b6b"><rect class="i9dcd_-yi"/><path clip-rule="evenodd" class="k132ggb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:midday"} {...others} />);
}

export default Component;
