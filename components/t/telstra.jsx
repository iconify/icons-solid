import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkwbkeyej.css';
import '../../css/n/nuaz6vdar.css';

const viewBox = {"width":1455.581,"height":400.711};
const content = `<path class="rkwbkeyej"/><path class="nuaz6vdar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:telstra"} {...others} />);
}

export default Component;
