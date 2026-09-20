import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y13z0jbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y13z0jbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:amazoncloudwatch"} {...others} />);
}

export default Component;
