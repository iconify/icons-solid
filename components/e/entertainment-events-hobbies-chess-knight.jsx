import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtohnhb-v.css';
import '../../css/z/z2kae53lq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rtohnhb-v"/><path class="z2kae53lq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-chess-knight"} {...others} />);
}

export default Component;
