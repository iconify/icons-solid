import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlf5z0fpf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlf5z0fpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:database"} {...others} />);
}

export default Component;
