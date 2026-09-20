import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzlaxabyj.css';
import '../../css/r/rwdv8mi0b.css';
import '../../css/u/uxe5k4oaw.css';
import '../../css/v/vsy7zpdaj.css';
import '../../css/l/l7tb7abxw.css';

const viewBox = {"width":960,"height":640};
const content = `<path class="yzlaxabyj"/><path class="rwdv8mi0b"/><path class="uxe5k4oaw"/><path class="vsy7zpdaj"/><path class="l7tb7abxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:minnesota-wild"} {...others} />);
}

export default Component;
