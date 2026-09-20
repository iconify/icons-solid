import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6wgzy02y.css';
import '../../css/r/rhjnb0hvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q6wgzy02y"/><path class="rhjnb0hvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:gear-24"} {...others} />);
}

export default Component;
