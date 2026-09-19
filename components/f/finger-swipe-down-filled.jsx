import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_vaous8i.css';
import '../../css/y/yze3d2bva.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_vaous8i"/><path class="yze3d2bva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:finger-swipe-down-filled"} {...others} />);
}

export default Component;
