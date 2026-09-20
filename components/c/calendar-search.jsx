import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2yt0tb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b2yt0tb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calendar-search"} {...others} />);
}

export default Component;
