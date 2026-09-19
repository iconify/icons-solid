import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp2-434cc.css';
import '../../css/m/mzibl9poh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dp2-434cc"/><path class="mzibl9poh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:open"} {...others} />);
}

export default Component;
