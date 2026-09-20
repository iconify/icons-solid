import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxtk6mbvt.css';

const viewBox = {"width":55,"height":20};
const content = `<path clip-rule="evenodd" class="cxtk6mbvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aero-dark"} {...others} />);
}

export default Component;
