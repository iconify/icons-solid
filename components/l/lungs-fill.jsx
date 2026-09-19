import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5c9r5brk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w5c9r5brk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:lungs-fill"} {...others} />);
}

export default Component;
