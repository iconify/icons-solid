import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb8c3rbaa.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="pb8c3rbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ear-hearing-remix"} {...others} />);
}

export default Component;
