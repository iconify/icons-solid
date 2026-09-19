import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n57qnm33o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n57qnm33o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:tachometer"} {...others} />);
}

export default Component;
