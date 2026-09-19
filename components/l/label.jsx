import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wda5zip_i.css';
import '../../css/z/zlfjm9kls.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path class="wda5zip_i"/><circle transform="rotate(-45 7.435 7.173)" class="zlfjm9kls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:label"} {...others} />);
}

export default Component;
