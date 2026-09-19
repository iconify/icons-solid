import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yil8a7ebz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yil8a7ebz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:chevron-forward-sharp"} {...others} />);
}

export default Component;
