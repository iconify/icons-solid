import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xcw0p3bti.css';
import '../../css/z/zksc_7zmr.css';
import '../../css/w/wm9jnnb5f.css';
import '../../css/y/yasfyvbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xcw0p3bti"/><path class="zksc_7zmr"/><path class="wm9jnnb5f"/><path class="yasfyvbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:condicioner-2-line-duotone"} {...others} />);
}

export default Component;
