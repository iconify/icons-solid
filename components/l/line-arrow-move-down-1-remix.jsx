import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1_3gx95k.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="n1_3gx95k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:line-arrow-move-down-1-remix"} {...others} />);
}

export default Component;
