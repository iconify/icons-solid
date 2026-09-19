import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr_1r9b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zr_1r9b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:alarm-clock-off"} {...others} />);
}

export default Component;
