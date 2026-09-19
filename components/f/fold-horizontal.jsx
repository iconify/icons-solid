import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npc8rjpju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="npc8rjpju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fold-horizontal"} {...others} />);
}

export default Component;
