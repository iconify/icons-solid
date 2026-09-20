import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhj0e-blr.css';
import '../../css/e/etqe0ibeg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zhj0e-blr"/><path clip-rule="evenodd" class="etqe0ibeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:cup-solid"} {...others} />);
}

export default Component;
