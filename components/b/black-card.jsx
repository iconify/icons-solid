import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/let3ambub.css';

const viewBox = {"width":2368,"height":1664};
const content = `<path class="let3ambub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:black-card"} {...others} />);
}

export default Component;
