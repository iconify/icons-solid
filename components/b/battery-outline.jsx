import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxb9-f_tp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxb9-f_tp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:battery-outline"} {...others} />);
}

export default Component;
