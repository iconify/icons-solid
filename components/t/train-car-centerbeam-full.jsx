import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg5c0-v8p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg5c0-v8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:train-car-centerbeam-full"} {...others} />);
}

export default Component;
