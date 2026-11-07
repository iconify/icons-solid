import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmt358bze.css';
import '../../css/d/dre6y_9-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hmt358bze"/><path class="dre6y_9-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diskette-bold"} {...others} />);
}

export default Component;
