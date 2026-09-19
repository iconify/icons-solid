import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7fgw7bls.css';
import '../../css/y/yua1kc2gi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r7fgw7bls"/><path class="yua1kc2gi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:badge-dollar"} {...others} />);
}

export default Component;
