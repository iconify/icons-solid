import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cv40bhlsq.css';
import '../../css/c/ch1ctkp8j.css';
import '../../css/l/lb3khzbez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cv40bhlsq"/><path clip-rule="evenodd" class="ch1ctkp8j"/><path class="lb3khzbez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:users-nearby-duotone"} {...others} />);
}

export default Component;
