import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7g0q9y_w.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="y7g0q9y_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:export-failed"} {...others} />);
}

export default Component;
