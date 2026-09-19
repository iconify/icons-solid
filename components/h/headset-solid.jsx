import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipba9j3av.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ipba9j3av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:headset-solid"} {...others} />);
}

export default Component;
