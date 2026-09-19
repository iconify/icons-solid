import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn3v8nbau.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="tn3v8nbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:ruler-vertical"} {...others} />);
}

export default Component;
