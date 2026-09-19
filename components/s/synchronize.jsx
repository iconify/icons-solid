import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nceokubug.css';
import '../../css/p/pro-ikbpl.css';
import '../../css/a/a6u3km0ls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nceokubug"/><path class="pro-ikbpl"/><path class="a6u3km0ls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:synchronize"} {...others} />);
}

export default Component;
