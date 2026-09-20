import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxk51mbgs.css';
import '../../css/e/euu0cowqs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oxk51mbgs"/><path class="euu0cowqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-docs-dark"} {...others} />);
}

export default Component;
