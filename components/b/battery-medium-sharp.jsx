import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mljm37bxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mljm37bxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:battery-medium-sharp"} {...others} />);
}

export default Component;
