import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6h-m2bpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i6h-m2bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alphabet-r-box-outline"} {...others} />);
}

export default Component;
