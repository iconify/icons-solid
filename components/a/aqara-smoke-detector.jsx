import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg8uj_7zb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yg8uj_7zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aqara-smoke-detector"} {...others} />);
}

export default Component;
