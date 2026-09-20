import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv8-u4bfa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv8-u4bfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:skip-next-outline"} {...others} />);
}

export default Component;
