import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujow3hbno.css';
import '../../css/g/g5c2p-ahz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ujow3hbno"/><path class="g5c2p-ahz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-remove-outline"} {...others} />);
}

export default Component;
