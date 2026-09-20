import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leb0en2nk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="leb0en2nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alpha-k"} {...others} />);
}

export default Component;
