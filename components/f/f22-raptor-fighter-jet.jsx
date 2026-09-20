import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9s6yip2j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q9s6yip2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:f22-raptor-fighter-jet"} {...others} />);
}

export default Component;
