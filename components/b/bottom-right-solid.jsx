import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6b6rrbve.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="i6b6rrbve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bottom-right-solid"} {...others} />);
}

export default Component;
