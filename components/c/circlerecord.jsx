import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2f3qxxav.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="t2f3qxxav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circlerecord"} {...others} />);
}

export default Component;
