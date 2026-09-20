import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7o158b4h.css';
import '../../css/y/y8h78tecu.css';
import '../../css/i/i92rutbis.css';
import '../../css/j/j5s5wkbcy.css';
import '../../css/n/n0mkydbhn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c7o158b4h"/><path class="y8h78tecu"/><path class="i92rutbis"/><path clip-rule="evenodd" class="j5s5wkbcy"/><path class="n0mkydbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:store-2"} {...others} />);
}

export default Component;
