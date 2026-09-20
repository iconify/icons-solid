import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x0g82jaec.css';
import '../../css/p/pggas962f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x0g82jaec"/><path class="pggas962f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-pause"} {...others} />);
}

export default Component;
