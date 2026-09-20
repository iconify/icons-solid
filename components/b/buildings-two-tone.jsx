import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nwglgkb1l.css';
import '../../css/x/x9r-uhjkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nwglgkb1l"/><path class="x9r-uhjkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:buildings-two-tone"} {...others} />);
}

export default Component;
