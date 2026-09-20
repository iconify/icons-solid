import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fznb90gae.css';
import '../../css/t/tityt4exd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="fznb90gae"/><path class="tityt4exd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:refresh-light"} {...others} />);
}

export default Component;
