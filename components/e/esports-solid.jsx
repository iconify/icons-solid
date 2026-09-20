import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyi4y7bam.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="oyi4y7bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:esports-solid"} {...others} />);
}

export default Component;
