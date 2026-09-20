import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9kh4nuhd.css';
import '../../css/r/r1betob-g.css';
import '../../css/d/dc5_tpftu.css';
import '../../css/k/krf9a9lju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e9kh4nuhd"/><path class="r1betob-g"/><path class="dc5_tpftu"/><path class="krf9a9lju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:keyboard"} {...others} />);
}

export default Component;
