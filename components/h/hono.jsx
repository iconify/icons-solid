import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhzw_ibjg.css';
import '../../css/f/fudbgdb1t.css';

const viewBox = {"width":256,"height":330};
const content = `<path class="uhzw_ibjg"/><path class="fudbgdb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hono"} {...others} />);
}

export default Component;
