import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_5nxcc1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_5nxcc1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:removedotbg"} {...others} />);
}

export default Component;
