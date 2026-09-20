import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gq5x_ybes.css';
import '../../css/f/ftaqapbbx.css';
import '../../css/y/y7ttj83bt.css';
import '../../css/z/z33y2y5ac.css';
import '../../css/t/t8j5gib8i.css';
import '../../css/o/objabyd6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gq5x_ybes"/><path class="ftaqapbbx"/><path class="y7ttj83bt"/><path class="z33y2y5ac"/><path class="t8j5gib8i"/><path class="objabyd6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:laptop-project-screen"} {...others} />);
}

export default Component;
