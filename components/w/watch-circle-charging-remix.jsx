import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqlzzl8-f.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="yqlzzl8-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:watch-circle-charging-remix"} {...others} />);
}

export default Component;
