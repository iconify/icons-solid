import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uen8fg65q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uen8fg65q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chevron-right-circle-filled"} {...others} />);
}

export default Component;
