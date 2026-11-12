import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukiwq4kfy.css';
import '../../css/v/vqwxhebmc.css';
import '../../css/n/n3b691blg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ukiwq4kfy"/><path class="vqwxhebmc"/><path class="n3b691blg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kdrive-dark"} {...others} />);
}

export default Component;
