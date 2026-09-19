import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv5badiir.css';
import '../../css/e/e5a3g-bwq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zv5badiir"/><path class="e5a3g-bwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:warning-square-filled"} {...others} />);
}

export default Component;
