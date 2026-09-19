import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uayhwehie.css';
import '../../css/b/bm73ro2ie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uayhwehie"/><path class="bm73ro2ie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:bookmarks"} {...others} />);
}

export default Component;
