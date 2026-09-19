import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj0x1lb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj0x1lb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wrist-watch-filled"} {...others} />);
}

export default Component;
