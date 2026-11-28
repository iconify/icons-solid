import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl1w0n5jy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tl1w0n5jy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:mic-play"} {...others} />);
}

export default Component;
