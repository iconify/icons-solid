import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7vuirbjs.css';
import '../../css/p/p3gjzeb-n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i7vuirbjs"/><path class="p3gjzeb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:new-window-fill-16"} {...others} />);
}

export default Component;
