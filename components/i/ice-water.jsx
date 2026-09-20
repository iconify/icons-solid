import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t600zh51a.css';
import '../../css/c/cfemc-bwk.css';
import '../../css/o/o9lrg9b8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t600zh51a"/><path class="cfemc-bwk"/><path class="o9lrg9b8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:ice-water"} {...others} />);
}

export default Component;
