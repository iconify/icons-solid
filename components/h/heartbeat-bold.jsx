import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie7e9dbhm.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="ie7e9dbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heartbeat-bold"} {...others} />);
}

export default Component;
