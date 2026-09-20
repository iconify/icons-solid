import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvji5lkkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvji5lkkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:check-rectangle-filled"} {...others} />);
}

export default Component;
