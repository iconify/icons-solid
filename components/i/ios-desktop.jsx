import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igbjqgb3u.css';
import '../../css/s/sdwvt0b9m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="igbjqgb3u"/><path class="sdwvt0b9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-desktop"} {...others} />);
}

export default Component;
