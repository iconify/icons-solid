import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/g8jmmbbsc.css';
import '../../css/s/s10ttfb-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="g8jmmbbsc"/><path class="s10ttfb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:button-fast-forward-2"} {...others} />);
}

export default Component;
