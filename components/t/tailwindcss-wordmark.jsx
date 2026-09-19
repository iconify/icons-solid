import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js7pf5byf.css';
import '../../css/i/iv3gg9_op.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="js7pf5byf"/><path class="iv3gg9_op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:tailwindcss-wordmark"} {...others} />);
}

export default Component;
