import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/synbksvac.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="synbksvac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:view-mode-1"} {...others} />);
}

export default Component;
