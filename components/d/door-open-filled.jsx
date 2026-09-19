import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll2pwacuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ll2pwacuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:door-open-filled"} {...others} />);
}

export default Component;
