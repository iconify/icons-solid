import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjo3nrs0n.css';
import '../../css/n/nb2wv2d3u.css';

const viewBox = {"width":91.24,"height":42.97};
const content = `<path class="jjo3nrs0n"/><path class="nb2wv2d3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lowes"} {...others} />);
}

export default Component;
