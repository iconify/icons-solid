import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q61yqbc-y.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="q61yqbc-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:grin-squint-tears"} {...others} />);
}

export default Component;
