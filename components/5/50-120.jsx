import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7qxp_zpx.css';

const viewBox = {"width":528,"height":448};
const content = `<path class="w7qxp_zpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:50-120"} {...others} />);
}

export default Component;
