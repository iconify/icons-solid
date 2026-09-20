import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/seiu6achr.css';
import '../../css/s/soqgok50x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="seiu6achr"/><path class="soqgok50x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transform-point-top-left"} {...others} />);
}

export default Component;
