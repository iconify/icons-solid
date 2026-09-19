import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rokj4hbjc.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="rokj4hbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:calendar"} {...others} />);
}

export default Component;
