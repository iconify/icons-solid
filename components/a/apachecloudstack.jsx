import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3dz9mbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3dz9mbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:apachecloudstack"} {...others} />);
}

export default Component;
