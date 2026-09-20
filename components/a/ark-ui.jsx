import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spwtggboo.css';
import '../../css/z/zap2qilim.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><rect class="spwtggboo"/><path class="zap2qilim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ark-ui"} {...others} />);
}

export default Component;
