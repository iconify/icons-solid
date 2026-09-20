import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa3p8cgmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aa3p8cgmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:arrow-big-up-sharp"} {...others} />);
}

export default Component;
