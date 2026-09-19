import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb0ublros.css';
import '../../css/j/jwnh_illk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb0ublros"/><path class="jwnh_illk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:user-square"} {...others} />);
}

export default Component;
