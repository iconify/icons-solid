import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2jgm9-lp.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="e2jgm9-lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:cut-filled"} {...others} />);
}

export default Component;
