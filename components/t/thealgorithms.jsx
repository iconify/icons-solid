import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/funxt_b8b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="funxt_b8b thealgorithms-plain-#000000"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:thealgorithms"} {...others} />);
}

export default Component;
