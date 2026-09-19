import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejr4_1b1c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="ejr4_1b1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:media-changer-solid"} {...others} />);
}

export default Component;
