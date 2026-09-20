import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esxr-xbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="esxr-xbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:unhappy-dizzy-fill"} {...others} />);
}

export default Component;
