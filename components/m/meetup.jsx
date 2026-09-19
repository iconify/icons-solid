import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq32g6yaw.css';

const viewBox = {"width":29,"height":24};
const content = `<path class="wq32g6yaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:meetup"} {...others} />);
}

export default Component;
