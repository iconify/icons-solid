import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0g8m7blk.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="a0g8m7blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:pathfinder-minus-front-2-remix"} {...others} />);
}

export default Component;
