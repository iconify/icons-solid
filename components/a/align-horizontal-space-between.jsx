import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l50xdjbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l50xdjbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:align-horizontal-space-between"} {...others} />);
}

export default Component;
