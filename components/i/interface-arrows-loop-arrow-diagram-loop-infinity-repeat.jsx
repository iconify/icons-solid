import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sda85vqfe.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="sda85vqfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-loop-arrow-diagram-loop-infinity-repeat"} {...others} />);
}

export default Component;
