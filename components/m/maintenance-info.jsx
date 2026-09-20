import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8b8fl31v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8b8fl31v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:maintenance-info"} {...others} />);
}

export default Component;
