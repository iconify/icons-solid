import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cul1c6h3i.css';
import '../../css/h/h6kufobuh.css';
import '../../css/f/ffxp6eb1z.css';
import '../../css/y/y1kpj5oie.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cul1c6h3i"/><path class="h6kufobuh"/><path class="ffxp6eb1z"/><path class="y1kpj5oie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:coupons-pop"} {...others} />);
}

export default Component;
