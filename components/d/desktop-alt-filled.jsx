import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv8dltjym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tv8dltjym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:desktop-alt-filled"} {...others} />);
}

export default Component;
