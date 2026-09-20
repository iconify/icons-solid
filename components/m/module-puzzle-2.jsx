import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/rne34ow4t.css';
import '../../css/w/w9kwvxbml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="rne34ow4t"/><path class="w9kwvxbml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:module-puzzle-2"} {...others} />);
}

export default Component;
