import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d98vhxb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d98vhxb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-rain-wind-solid"} {...others} />);
}

export default Component;
