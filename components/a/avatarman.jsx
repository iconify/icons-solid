import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9mpdcwxa.css';
import '../../css/y/yh9pzinki.css';

const viewBox = {"width":13,"height":16};
const content = `<path class="v9mpdcwxa"/><path class="yh9pzinki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:avatarman"} {...others} />);
}

export default Component;
