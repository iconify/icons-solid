import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks8-j5qct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ks8-j5qct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:user-check"} {...others} />);
}

export default Component;
