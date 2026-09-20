import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1mi8z8gu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o1mi8z8gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:send-visee"} {...others} />);
}

export default Component;
