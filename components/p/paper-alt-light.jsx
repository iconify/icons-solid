import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v94z-_wrd.css';
import '../../css/a/a3jpjidwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="v94z-_wrd"/><path class="a3jpjidwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:paper-alt-light"} {...others} />);
}

export default Component;
