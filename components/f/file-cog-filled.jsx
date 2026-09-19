import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryrhgi3ds.css';
import '../../css/x/x43m2tg3u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryrhgi3ds"/><path class="x43m2tg3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-cog-filled"} {...others} />);
}

export default Component;
