import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2qeb8bam.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v2qeb8bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:apartments-2-story-skillion-roof"} {...others} />);
}

export default Component;
