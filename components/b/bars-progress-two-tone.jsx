import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ao2gcsqwp.css';
import '../../css/u/uhf267b6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ao2gcsqwp"/><path class="uhf267b6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bars-progress-two-tone"} {...others} />);
}

export default Component;
