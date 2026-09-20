import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0fcp82sb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k0fcp82sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:text-formatting-bottom-image"} {...others} />);
}

export default Component;
