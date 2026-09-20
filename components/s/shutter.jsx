import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xja5e1bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xja5e1bfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:shutter"} {...others} />);
}

export default Component;
