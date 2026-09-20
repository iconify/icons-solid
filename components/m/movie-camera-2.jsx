import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wfsy8ybet.css';
import '../../css/n/nb7rj3maz.css';
import '../../css/e/em_48cbtk.css';
import '../../css/d/dpf0383bw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wfsy8ybet"/><path class="nb7rj3maz"/><path class="em_48cbtk"/><path class="dpf0383bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:movie-camera-2"} {...others} />);
}

export default Component;
