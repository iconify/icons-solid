import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/quzd0abac.css';
import '../../css/c/c7nu9q8aq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="quzd0abac"/><path class="c7nu9q8aq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:favicon"} {...others} />);
}

export default Component;
