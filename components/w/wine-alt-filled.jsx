import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv_l3nbzk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv_l3nbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wine-alt-filled"} {...others} />);
}

export default Component;
