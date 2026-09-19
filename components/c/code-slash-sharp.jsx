import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8b0e2b-w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e8b0e2b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:code-slash-sharp"} {...others} />);
}

export default Component;
