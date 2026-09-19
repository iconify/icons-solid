import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcje_ok-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lcje_ok-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trade-mark-circle"} {...others} />);
}

export default Component;
