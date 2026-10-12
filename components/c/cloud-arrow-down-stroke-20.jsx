import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9ct7fbgs.css';
import '../../css/z/z5f1jwb5h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n9ct7fbgs"/><path class="z5f1jwb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:cloud-arrow-down-stroke-20"} {...others} />);
}

export default Component;
