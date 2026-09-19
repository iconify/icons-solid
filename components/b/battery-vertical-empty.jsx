import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx1mgel_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nx1mgel_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:battery-vertical-empty"} {...others} />);
}

export default Component;
