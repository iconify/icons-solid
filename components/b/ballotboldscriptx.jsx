import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb76z_6xl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bb76z_6xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ballotboldscriptx"} {...others} />);
}

export default Component;
