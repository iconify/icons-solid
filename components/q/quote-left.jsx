import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr0zt0kgx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rr0zt0kgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:quote-left"} {...others} />);
}

export default Component;
