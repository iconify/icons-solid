import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1c-5hbxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q1c-5hbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:angle-right"} {...others} />);
}

export default Component;
