import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtwq637wt.css';
import '../../css/r/rbu9ceb1c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rtwq637wt"/><path class="rbu9ceb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:okta"} {...others} />);
}

export default Component;
