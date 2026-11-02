import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo6f8_brz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wo6f8_brz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mastodon-line"} {...others} />);
}

export default Component;
