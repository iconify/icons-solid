import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3k-9dnhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3k-9dnhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:signal-cellular-3"} {...others} />);
}

export default Component;
