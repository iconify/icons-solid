import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx-7y4g4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yx-7y4g4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:iphone-old-apps"} {...others} />);
}

export default Component;
