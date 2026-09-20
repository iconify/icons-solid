import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/es87wyzsk.css';
import '../../css/y/y6iicshxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="es87wyzsk"/><path class="y6iicshxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:parking-square-off"} {...others} />);
}

export default Component;
