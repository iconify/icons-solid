import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysl5nf33v.css';
import '../../css/v/vjs9accli.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ysl5nf33v"/><path class="vjs9accli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:edit-undo-fill-16"} {...others} />);
}

export default Component;
