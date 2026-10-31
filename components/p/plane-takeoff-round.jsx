import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo1hrhboy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uo1hrhboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:plane-takeoff-round"} {...others} />);
}

export default Component;
