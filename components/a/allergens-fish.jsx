import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah89bsx3m.css';
import '../../css/n/ngfkzc87p.css';
import '../../css/b/bwhhw35tf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ah89bsx3m"/><path class="ngfkzc87p"/><path class="bwhhw35tf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:allergens-fish"} {...others} />);
}

export default Component;
