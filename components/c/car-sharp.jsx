import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0dyo-b5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r0dyo-b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:car-sharp"} {...others} />);
}

export default Component;
