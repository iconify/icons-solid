import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij26ksgsl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ij26ksgsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:greater-than-or-equal"} {...others} />);
}

export default Component;
