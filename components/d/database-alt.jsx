import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6l7nbjig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6l7nbjig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:database-alt"} {...others} />);
}

export default Component;
