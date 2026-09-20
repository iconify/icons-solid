import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4oyap5nm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d4oyap5nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:lightbulb"} {...others} />);
}

export default Component;
