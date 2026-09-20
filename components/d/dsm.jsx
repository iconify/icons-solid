import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7nujkzvg.css';
import '../../css/u/u9y3aibok.css';
import '../../css/v/vf6i915qg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7nujkzvg"/><path class="u9y3aibok"/><path class="vf6i915qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dsm"} {...others} />);
}

export default Component;
