import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl75c2-_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fl75c2-_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:traffic-cone-line"} {...others} />);
}

export default Component;
