import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy3zah5lz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hy3zah5lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:accessibility"} {...others} />);
}

export default Component;
