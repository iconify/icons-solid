import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1jlu27kk.css';
import '../../css/d/dnv52pbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d1jlu27kk"/><path class="dnv52pbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-right-left-bold"} {...others} />);
}

export default Component;
