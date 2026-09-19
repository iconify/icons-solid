import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyhn3o41r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyhn3o41r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:trash-2"} {...others} />);
}

export default Component;
