import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akkw_4bak.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="akkw_4bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:icicles"} {...others} />);
}

export default Component;
