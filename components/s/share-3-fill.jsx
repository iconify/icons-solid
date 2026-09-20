import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weq3sf4aj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="weq3sf4aj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:share-3-fill"} {...others} />);
}

export default Component;
