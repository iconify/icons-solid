import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l9kv1cbvj.css';
import '../../css/j/j7qjn6psg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l9kv1cbvj"/><path class="j7qjn6psg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-pinterest"} {...others} />);
}

export default Component;
