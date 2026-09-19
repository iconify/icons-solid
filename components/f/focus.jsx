import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufpp1dblg.css';
import '../../css/f/fi8i2-gbz.css';
import '../../css/n/nsusglb8a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ufpp1dblg"/><rect class="fi8i2-gbz"/><circle transform="matrix(-1 0 0 1 24 24)" class="nsusglb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:focus"} {...others} />);
}

export default Component;
