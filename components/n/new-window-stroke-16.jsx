import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbka6eb7h.css';
import '../../css/p/piht5gbxt.css';
import '../../css/k/knkpb5bxr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nbka6eb7h"/><path class="piht5gbxt"/><path class="knkpb5bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:new-window-stroke-16"} {...others} />);
}

export default Component;
