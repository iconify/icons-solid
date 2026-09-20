import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8u6lgacq.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="d8u6lgacq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:pictures-folder-memories-remix"} {...others} />);
}

export default Component;
