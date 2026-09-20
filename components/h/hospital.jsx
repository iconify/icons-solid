import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwqp5qbdv.css';
import '../../css/w/wi3s5ubtt.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="jwqp5qbdv"/><path class="wi3s5ubtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:hospital"} {...others} />);
}

export default Component;
