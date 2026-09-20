import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eulp63vgs.css';
import '../../css/d/dgcq1kbih.css';
import '../../css/e/e0vjdni7u.css';
import '../../css/o/o-d1fgbbx.css';
import '../../css/a/adu85epgh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="eulp63vgs"/><path class="dgcq1kbih"/><path class="e0vjdni7u"/><path class="o-d1fgbbx"/><path class="adu85epgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:location-pin-3"} {...others} />);
}

export default Component;
