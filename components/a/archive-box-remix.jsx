import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9zih83im.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="o9zih83im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:archive-box-remix"} {...others} />);
}

export default Component;
