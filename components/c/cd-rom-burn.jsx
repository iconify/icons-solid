import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1fmgbb9l.css';
import '../../css/j/jp007tmga.css';
import '../../css/y/yiyfahk2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1fmgbb9l"/><path class="jp007tmga"/><path class="yiyfahk2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cd-rom-burn"} {...others} />);
}

export default Component;
