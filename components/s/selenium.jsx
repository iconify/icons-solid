import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaw774b1y.css';
import '../../css/b/bjy9zyb1r.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="aaw774b1y"/><path class="bjy9zyb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:selenium"} {...others} />);
}

export default Component;
