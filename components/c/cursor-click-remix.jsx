import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4ovm8b7n.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p4ovm8b7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cursor-click-remix"} {...others} />);
}

export default Component;
