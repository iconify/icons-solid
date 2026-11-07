import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd06o6ovg.css';
import '../../css/u/ur40gui8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dd06o6ovg"/><path class="ur40gui8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:i-phone-bold-duotone"} {...others} />);
}

export default Component;
