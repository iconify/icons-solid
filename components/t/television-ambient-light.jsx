import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxfgj3bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxfgj3bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:television-ambient-light"} {...others} />);
}

export default Component;
