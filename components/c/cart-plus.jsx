import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvyy595xw.css';
import '../../css/t/t2k1y2acb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvyy595xw"/><path class="t2k1y2acb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cart-plus"} {...others} />);
}

export default Component;
