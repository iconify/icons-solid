import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lr4qwibfw.css';
import '../../css/g/gzytc5ion.css';
import '../../css/t/t19elabye.css';
import '../../css/s/sazkadbzz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lr4qwibfw"/><path class="gzytc5ion"/><path class="t19elabye"/><path class="sazkadbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:straight-cap"} {...others} />);
}

export default Component;
