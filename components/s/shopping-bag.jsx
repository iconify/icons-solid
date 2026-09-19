import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2cephbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p2cephbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:shopping-bag"} {...others} />);
}

export default Component;
