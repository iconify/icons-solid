import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnq331bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nnq331bdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:circle-diameter-outline"} {...others} />);
}

export default Component;
