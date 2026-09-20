import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc5i42c4e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oc5i42c4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-leaping-over-hurdle"} {...others} />);
}

export default Component;
