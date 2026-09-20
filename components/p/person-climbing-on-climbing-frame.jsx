import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy_v_9b1z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yy_v_9b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-climbing-on-climbing-frame"} {...others} />);
}

export default Component;
