import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcdd--2ea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dcdd--2ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:arrow-left-down-circle-filled"} {...others} />);
}

export default Component;
