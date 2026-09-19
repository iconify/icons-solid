import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i2qx8ub-x.css';
import '../../css/u/ubuh6kbkg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="i2qx8ub-x"/><path class="ubuh6kbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shaving"} {...others} />);
}

export default Component;
