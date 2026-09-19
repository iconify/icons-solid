import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os8x0cc1a.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="os8x0cc1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:tower-broadcast"} {...others} />);
}

export default Component;
