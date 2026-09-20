import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt3rp2b8g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yt3rp2b8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:creative-commons-nc-jp"} {...others} />);
}

export default Component;
