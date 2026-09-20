import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmw063b4e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gmw063b4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:trade-federation"} {...others} />);
}

export default Component;
