import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdor-wx8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdor-wx8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:plus-minus-duotone-round"} {...others} />);
}

export default Component;
