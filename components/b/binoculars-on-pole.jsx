import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5qurlb0j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n5qurlb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:binoculars-on-pole"} {...others} />);
}

export default Component;
