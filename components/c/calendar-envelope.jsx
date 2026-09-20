import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijvvyibbs.css';
import '../../css/n/n_v2xfr4l.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ijvvyibbs"/><path class="n_v2xfr4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:calendar-envelope"} {...others} />);
}

export default Component;
