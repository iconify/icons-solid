import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie0mq3i_d.css';
import '../../css/k/kgzgwquda.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ie0mq3i_d"/><path class="kgzgwquda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:envelope"} {...others} />);
}

export default Component;
