import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohmcow45c.css';
import '../../css/e/emp3rxbod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohmcow45c"/><path class="emp3rxbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hmnd"} {...others} />);
}

export default Component;
