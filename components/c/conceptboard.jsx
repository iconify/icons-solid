import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejshfpu0b.css';
import '../../css/p/pm7rgls4x.css';

const viewBox = {"width":260,"height":260};
const content = `<path class="ejshfpu0b"/><path class="pm7rgls4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:conceptboard"} {...others} />);
}

export default Component;
