import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uy8oi1b2k.css';
import '../../css/u/uhoodbb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uy8oi1b2k"/><path class="uhoodbb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bookmarks"} {...others} />);
}

export default Component;
