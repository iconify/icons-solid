import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja_p8eblc.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ja_p8eblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pathfinder-divide-solid"} {...others} />);
}

export default Component;
