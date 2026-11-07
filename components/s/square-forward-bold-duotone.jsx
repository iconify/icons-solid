import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw89vjxov.css';
import '../../css/q/q10-_mx1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jw89vjxov"/><path class="q10-_mx1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-forward-bold-duotone"} {...others} />);
}

export default Component;
