import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2cef4b8x.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="o2cef4b8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:fresh-juice"} {...others} />);
}

export default Component;
