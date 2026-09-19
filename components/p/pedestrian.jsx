import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly82mzboj.css';
import '../../css/x/xxtpbdb0h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ly82mzboj"/><path class="xxtpbdb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pedestrian"} {...others} />);
}

export default Component;
