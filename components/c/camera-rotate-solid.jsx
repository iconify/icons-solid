import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_3k02bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w_3k02bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:camera-rotate-solid"} {...others} />);
}

export default Component;
