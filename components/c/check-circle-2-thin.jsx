import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m2aoc-b8l.css';
import '../../css/r/r3yep8gbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="m2aoc-b8l"/><path class="r3yep8gbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:check-circle-2-thin"} {...others} />);
}

export default Component;
