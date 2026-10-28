import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn2z21zcm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jn2z21zcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:neon"} {...others} />);
}

export default Component;
