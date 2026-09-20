import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o00nz9qpp.css';
import '../../css/e/e3y_efb8k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="o00nz9qpp"/><path class="e3y_efb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:user-white-outline"} {...others} />);
}

export default Component;
