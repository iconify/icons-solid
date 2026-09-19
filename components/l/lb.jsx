import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6tb832tf.css';
import '../../css/o/o-fat3bzs.css';
import '../../css/a/ahmewzbzw.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="e6tb832tf"/><path class="o-fat3bzs"/><path class="ahmewzbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lb"} {...others} />);
}

export default Component;
