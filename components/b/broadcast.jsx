import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-zkvf-3u.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="y-zkvf-3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:broadcast"} {...others} />);
}

export default Component;
