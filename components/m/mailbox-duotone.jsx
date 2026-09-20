import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pansh_bqv.css';
import '../../css/k/k7wymaclk.css';
import '../../css/j/jwsgkxbib.css';
import '../../css/s/sitkwvw3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pansh_bqv"/><path class="k7wymaclk"/><path class="jwsgkxbib"/><path clip-rule="evenodd" class="sitkwvw3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mailbox-duotone"} {...others} />);
}

export default Component;
