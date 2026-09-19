import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-7w5gbig.css';
import '../../css/y/y1hb6nbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x-7w5gbig"/><path class="y1hb6nbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:mosque-filled"} {...others} />);
}

export default Component;
