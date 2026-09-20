import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_4aq0bli.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x_4aq0bli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:level-three-ltr"} {...others} />);
}

export default Component;
