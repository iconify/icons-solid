import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exba11bdo.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="exba11bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:star-badge-remix"} {...others} />);
}

export default Component;
