import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc2k5s1mv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oc2k5s1mv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-door-open"} {...others} />);
}

export default Component;
