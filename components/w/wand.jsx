import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odhnjvb-z.css';
import '../../css/a/a-b8f211a.css';
import '../../css/b/bqyndnr_m.css';
import '../../css/a/agurgjful.css';

const viewBox = {"width":41,"height":41};
const content = `<g class="ft5dv1b6b"><path class="odhnjvb-z"/><path class="a-b8f211a"/><path class="bqyndnr_m"/><path class="agurgjful"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:wand"} {...others} />);
}

export default Component;
