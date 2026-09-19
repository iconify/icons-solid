import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajgczlb1j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ajgczlb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:spyre-accelerator"} {...others} />);
}

export default Component;
