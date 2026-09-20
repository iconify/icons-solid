import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avz4yyjca.css';
import '../../css/g/g43vcebmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="avz4yyjca"/><path class="g43vcebmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:layer-arrow-down"} {...others} />);
}

export default Component;
