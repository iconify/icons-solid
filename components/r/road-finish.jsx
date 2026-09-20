import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/b/b7d7yybaj.css';
import '../../css/f/f5x9-gb5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="b7d7yybaj"/><path class="f5x9-gb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:road-finish"} {...others} />);
}

export default Component;
