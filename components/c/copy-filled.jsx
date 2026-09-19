import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3mrqjpwv.css';
import '../../css/y/yft_2jb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="i3mrqjpwv"/><path class="yft_2jb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:copy-filled"} {...others} />);
}

export default Component;
