import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5i3ru5ze.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o5i3ru5ze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:title"} {...others} />);
}

export default Component;
