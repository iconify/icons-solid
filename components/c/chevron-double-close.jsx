import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veyi8bc9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="veyi8bc9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chevron-double-close"} {...others} />);
}

export default Component;
