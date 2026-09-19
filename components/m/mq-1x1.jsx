import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiop7zcov.css';
import '../../css/s/s9vs66t3i.css';
import '../../css/o/oqmockrge.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wiop7zcov"/><path class="s9vs66t3i"/><path class="oqmockrge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mq-1x1"} {...others} />);
}

export default Component;
