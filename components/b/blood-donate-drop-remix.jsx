import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nub9o5gbz.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="nub9o5gbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:blood-donate-drop-remix"} {...others} />);
}

export default Component;
