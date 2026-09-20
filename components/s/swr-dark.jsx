import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xafgut1dg.css';

const viewBox = {"width":2200,"height":2200};
const content = `<path class="xafgut1dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:swr-dark"} {...others} />);
}

export default Component;
