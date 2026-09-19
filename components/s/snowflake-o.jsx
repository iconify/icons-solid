import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0_9m3btv.css';

const viewBox = {"width":1600,"height":1792};
const content = `<path class="s0_9m3btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:snowflake-o"} {...others} />);
}

export default Component;
