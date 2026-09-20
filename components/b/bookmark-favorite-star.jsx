import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euj41jbgy.css';
import '../../css/k/khf5-cb1g.css';
import '../../css/w/wvfe3qshx.css';
import '../../css/r/r1hmr-bmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="euj41jbgy"/><path class="khf5-cb1g"/><path class="wvfe3qshx"/><path class="r1hmr-bmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bookmark-favorite-star"} {...others} />);
}

export default Component;
