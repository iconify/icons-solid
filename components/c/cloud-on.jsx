import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr4d2z28y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mr4d2z28y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:cloud-on"} {...others} />);
}

export default Component;
