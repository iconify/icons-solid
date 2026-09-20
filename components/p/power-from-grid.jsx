import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhf8m9a1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhf8m9a1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:power-from-grid"} {...others} />);
}

export default Component;
