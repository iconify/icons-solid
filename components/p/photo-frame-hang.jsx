import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbajsebqc.css';
import '../../css/c/cyh0x2hax.css';
import '../../css/q/q9scqob2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pbajsebqc"/><path class="cyh0x2hax"/><path class="q9scqob2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:photo-frame-hang"} {...others} />);
}

export default Component;
