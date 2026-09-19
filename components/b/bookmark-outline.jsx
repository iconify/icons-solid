import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp7t9jpua.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cp7t9jpua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:bookmark-outline"} {...others} />);
}

export default Component;
