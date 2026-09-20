import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebspqb8ic.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ebspqb8ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:folder-plus-outline"} {...others} />);
}

export default Component;
