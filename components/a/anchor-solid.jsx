import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0m9wbbsh.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="b0m9wbbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:anchor-solid"} {...others} />);
}

export default Component;
