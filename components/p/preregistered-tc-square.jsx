import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0-wepb-l.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="a0-wepb-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:preregistered-tc-square"} {...others} />);
}

export default Component;
