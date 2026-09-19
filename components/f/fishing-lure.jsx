import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa4e-v7zv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wa4e-v7zv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:fishing-lure"} {...others} />);
}

export default Component;
