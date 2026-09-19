import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/az38-2bov.css';
import '../../css/a/azk4kkbbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="az38-2bov"/><path class="azk4kkbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:wi-fi"} {...others} />);
}

export default Component;
