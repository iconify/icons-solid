import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d2hx6zd8z.css';
import '../../css/w/wp5tlqhlu.css';
import '../../css/r/rngum0m3z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="d2hx6zd8z"/><path class="wp5tlqhlu"/><path class="rngum0m3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:repeat-single"} {...others} />);
}

export default Component;
