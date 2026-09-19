import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e32cefbaq.css';
import '../../css/o/os3k17bny.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="e32cefbaq"/><path class="os3k17bny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:ui-earth-west"} {...others} />);
}

export default Component;
