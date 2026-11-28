import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hugsjk8ob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hugsjk8ob primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ease-out-duotone"} {...others} />);
}

export default Component;
