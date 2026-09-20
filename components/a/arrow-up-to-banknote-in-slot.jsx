import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdhb7_b8t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kdhb7_b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:arrow-up-to-banknote-in-slot"} {...others} />);
}

export default Component;
