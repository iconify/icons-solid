import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezx9wab7j.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="ezx9wab7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:animation-1-filled"} {...others} />);
}

export default Component;
