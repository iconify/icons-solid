import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m32k1ef5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m32k1ef5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:menu-select"} {...others} />);
}

export default Component;
