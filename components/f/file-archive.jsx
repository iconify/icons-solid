import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfd8-93rh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tfd8-93rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:file-archive"} {...others} />);
}

export default Component;
