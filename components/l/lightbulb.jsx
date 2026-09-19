import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf0alrb_x.css';
import '../../css/c/ckevorb5i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bf0alrb_x"/><path class="ckevorb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:lightbulb"} {...others} />);
}

export default Component;
