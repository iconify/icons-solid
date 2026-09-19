import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6loahb8d.css';

const viewBox = {"width":528,"height":456};
const content = `<path class="d6loahb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:machine-wash-permanent-press"} {...others} />);
}

export default Component;
