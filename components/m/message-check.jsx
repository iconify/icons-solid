import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzy0c9c2j.css';
import '../../css/h/hi_p53-ge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rzy0c9c2j"/><path class="hi_p53-ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-check"} {...others} />);
}

export default Component;
