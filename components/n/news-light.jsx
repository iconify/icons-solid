import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nr3vuui2s.css';
import '../../css/w/wjw7abr5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="nr3vuui2s"/><path class="wjw7abr5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:news-light"} {...others} />);
}

export default Component;
