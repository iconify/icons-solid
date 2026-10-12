import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrzbkeb4j.css';
import '../../css/q/q1clsqbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qrzbkeb4j"/><path class="q1clsqbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shield-house"} {...others} />);
}

export default Component;
