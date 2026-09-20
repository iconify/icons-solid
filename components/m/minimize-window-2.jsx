import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4yh4hbcx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="r4yh4hbcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:minimize-window-2"} {...others} />);
}

export default Component;
