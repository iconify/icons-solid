import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wov6qjbrb.css';
import '../../css/k/kx5tz624c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wov6qjbrb"/><path class="kx5tz624c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:key-24"} {...others} />);
}

export default Component;
