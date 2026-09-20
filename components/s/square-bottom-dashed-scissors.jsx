import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/limkoio6o.css';
import '../../css/d/d2umvjsxg.css';
import '../../css/y/yopadjb1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="limkoio6o"/><circle class="d2umvjsxg"/><circle class="yopadjb1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-bottom-dashed-scissors"} {...others} />);
}

export default Component;
