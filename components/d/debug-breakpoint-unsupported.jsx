import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ove_r8gba.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ove_r8gba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:debug-breakpoint-unsupported"} {...others} />);
}

export default Component;
