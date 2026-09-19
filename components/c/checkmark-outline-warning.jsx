import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgj8co51w.css';
import '../../css/o/o_xa80bbg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kgj8co51w"/><path class="o_xa80bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:checkmark-outline-warning"} {...others} />);
}

export default Component;
