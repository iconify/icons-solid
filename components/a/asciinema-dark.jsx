import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7ze7-tqp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n7ze7-tqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:asciinema-dark"} {...others} />);
}

export default Component;
