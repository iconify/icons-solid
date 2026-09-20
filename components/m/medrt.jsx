import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqj36j7ex.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bqj36j7ex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:medrt"} {...others} />);
}

export default Component;
