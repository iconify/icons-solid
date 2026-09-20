import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmu0x6ayu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xmu0x6ayu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sonic"} {...others} />);
}

export default Component;
