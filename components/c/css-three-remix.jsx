import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up02t5b3n.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="up02t5b3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:css-three-remix"} {...others} />);
}

export default Component;
