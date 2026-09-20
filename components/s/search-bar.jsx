import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9rxsbxoh.css';
import '../../css/c/cj0y4nb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u9rxsbxoh"/><path class="cj0y4nb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:search-bar"} {...others} />);
}

export default Component;
