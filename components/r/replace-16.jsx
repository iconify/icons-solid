import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/feoxutb2p.css';
import '../../css/c/ce2rhacdh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="feoxutb2p"/><path class="ce2rhacdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:replace-16"} {...others} />);
}

export default Component;
