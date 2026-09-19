import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svvim6bry.css';
import '../../css/x/x8snpsbmu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="svvim6bry"/><path class="x8snpsbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:stacked-move"} {...others} />);
}

export default Component;
