import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm-_mpb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm-_mpb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bookmark-x-filled"} {...others} />);
}

export default Component;
