import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/j/j-hctd9nb.css';
import '../../css/f/fo4ccr_rl.css';
import '../../css/u/u2x12mb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="shu3xdl9q"/><path class="j-hctd9nb"/><path class="fo4ccr_rl"/><path class="u2x12mb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:play-circle-stroke"} {...others} />);
}

export default Component;
