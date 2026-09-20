import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vod3zxb3c.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="vod3zxb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:screen-broadcast-remix"} {...others} />);
}

export default Component;
