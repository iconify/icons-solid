import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i98kxfuyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i98kxfuyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:traffic-filled"} {...others} />);
}

export default Component;
