import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlxzqobyy.css';
import '../../css/y/y5z6dwezu.css';
import '../../css/a/akcxopd1a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zlxzqobyy"/><path class="y5z6dwezu"/><path class="akcxopd1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-slides"} {...others} />);
}

export default Component;
