import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/uu9b4bc7u.css';
import '../../css/f/ft2l95bxf.css';
import '../../css/u/uh2hlabld.css';
import '../../css/l/l0ogun7yt.css';
import '../../css/g/gr_uotbbp.css';
import '../../css/h/h4v07jboa.css';
import '../../css/d/dd_-bebiv.css';
import '../../css/t/tyz4ab8in.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="uu9b4bc7u"/><path class="ft2l95bxf"/></g><path class="uh2hlabld"/><path class="l0ogun7yt"/><path class="gr_uotbbp"/><path class="h4v07jboa"/><path class="dd_-bebiv"/><path class="tyz4ab8in"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-pen-bold-duotone"} {...others} />);
}

export default Component;
