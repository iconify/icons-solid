import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r07v9qjhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r07v9qjhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:reply-big-filled"} {...others} />);
}

export default Component;
