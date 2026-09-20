import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0t096bam.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="i0t096bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:recipe"} {...others} />);
}

export default Component;
