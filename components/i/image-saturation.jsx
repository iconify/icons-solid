import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8rf7nr2l.css';
import '../../css/v/v4t-b0bek.css';
import '../../css/u/uqp9kkbqv.css';
import '../../css/f/fhqo6ibzu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="m8rf7nr2l"/><path class="v4t-b0bek"/><path class="uqp9kkbqv"/><path class="fhqo6ibzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:image-saturation"} {...others} />);
}

export default Component;
