import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgs0yzbjm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xgs0yzbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:envelope-solid"} {...others} />);
}

export default Component;
