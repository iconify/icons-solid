import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fc01xzbmc.css';
import '../../css/z/zuy337bcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="fc01xzbmc"/><rect class="zuy337bcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chart-light"} {...others} />);
}

export default Component;
