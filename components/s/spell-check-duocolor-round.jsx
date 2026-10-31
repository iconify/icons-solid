import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ann0lpb9l.css';
import '../../css/l/ldhmjcjud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ann0lpb9l"/><path class="ldhmjcjud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:spell-check-duocolor-round"} {...others} />);
}

export default Component;
