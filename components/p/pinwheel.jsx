import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv5yd5ixf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rv5yd5ixf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pinwheel"} {...others} />);
}

export default Component;
