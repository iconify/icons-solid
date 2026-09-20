import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzqfh5bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzqfh5bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:wifi-off-line"} {...others} />);
}

export default Component;
