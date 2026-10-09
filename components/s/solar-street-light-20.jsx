import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzwg3_boa.css';
import '../../css/y/yyposl7cp.css';
import '../../css/i/ijz7pfd4y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rzwg3_boa"/><path class="yyposl7cp"/><path class="ijz7pfd4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-street-light-20"} {...others} />);
}

export default Component;
