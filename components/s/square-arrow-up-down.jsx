import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kgo0agbtd.css';
import '../../css/g/gaxc7sbac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="kgo0agbtd"/><path class="gaxc7sbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-arrow-up-down"} {...others} />);
}

export default Component;
