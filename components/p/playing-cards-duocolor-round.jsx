import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uhve_kb3h.css';
import '../../css/b/b18ioelvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uhve_kb3h"/><path class="b18ioelvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:playing-cards-duocolor-round"} {...others} />);
}

export default Component;
