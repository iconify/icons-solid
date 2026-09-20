import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0hy8ybjy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q0hy8ybjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:watchlist-ltr"} {...others} />);
}

export default Component;
