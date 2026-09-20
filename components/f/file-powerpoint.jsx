import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdo1a8bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdo1a8bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-powerpoint"} {...others} />);
}

export default Component;
