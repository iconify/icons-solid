import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khu5r_tqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="khu5r_tqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cube-solid"} {...others} />);
}

export default Component;
