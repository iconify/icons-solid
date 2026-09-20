import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8c4q0b7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8c4q0b7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:hazard-lights"} {...others} />);
}

export default Component;
