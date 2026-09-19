import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py5u74dhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="py5u74dhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:rasberry-pi"} {...others} />);
}

export default Component;
