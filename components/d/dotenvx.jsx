import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn5it8i0p.css';
import '../../css/a/az2bjjb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vn5it8i0p"/><path class="az2bjjb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dotenvx"} {...others} />);
}

export default Component;
