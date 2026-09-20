import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1mfc1b6e.css';
import '../../css/m/m9-ge182a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e1mfc1b6e"/><path clip-rule="evenodd" class="m9-ge182a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:alarm-solid"} {...others} />);
}

export default Component;
