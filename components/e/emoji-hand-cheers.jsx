import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af4cuy1nq.css';
import '../../css/q/qghtzzbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="af4cuy1nq"/><path class="qghtzzbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:emoji-hand-cheers"} {...others} />);
}

export default Component;
