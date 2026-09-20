import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wa1fq9xfh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wa1fq9xfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:power-tower-y-frame"} {...others} />);
}

export default Component;
