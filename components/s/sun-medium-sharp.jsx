import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unb5jhb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="unb5jhb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sun-medium-sharp"} {...others} />);
}

export default Component;
