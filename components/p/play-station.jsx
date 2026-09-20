import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da0ha9bxt.css';
import '../../css/e/et1rc8bcm.css';
import '../../css/a/a27c73v5e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="da0ha9bxt"/><path class="et1rc8bcm"/><path class="a27c73v5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-station"} {...others} />);
}

export default Component;
