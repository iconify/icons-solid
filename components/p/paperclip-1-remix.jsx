import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdq67nb9a.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="jdq67nb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:paperclip-1-remix"} {...others} />);
}

export default Component;
