import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn3h6pbxt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nn3h6pbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:masked-spider"} {...others} />);
}

export default Component;
