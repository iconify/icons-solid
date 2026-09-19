import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/va0qzx95a.css';
import '../../css/i/ie-ns4b3y.css';
import '../../css/z/z0u1g-tdn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="va0qzx95a"/><path class="ie-ns4b3y"/><path class="z0u1g-tdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:remind"} {...others} />);
}

export default Component;
