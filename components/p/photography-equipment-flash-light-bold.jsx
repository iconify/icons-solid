import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8ap81bui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p8ap81bui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:photography-equipment-flash-light-bold"} {...others} />);
}

export default Component;
