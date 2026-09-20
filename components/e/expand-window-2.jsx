import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0kqobc-l.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="t0kqobc-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:expand-window-2"} {...others} />);
}

export default Component;
