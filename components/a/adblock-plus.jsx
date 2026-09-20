import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq8x8nbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tq8x8nbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:adblock-plus"} {...others} />);
}

export default Component;
