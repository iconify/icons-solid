import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-atxg24s.css';
import '../../css/n/nwt48v2tu.css';
import '../../css/u/u0_h6rcii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i-atxg24s"/><path class="nwt48v2tu"/><path class="u0_h6rcii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:database-filled"} {...others} />);
}

export default Component;
