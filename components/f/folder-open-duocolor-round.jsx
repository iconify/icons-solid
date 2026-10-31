import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbki_75ny.css';
import '../../css/w/w7e9ii9ft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lbki_75ny"/><path class="w7e9ii9ft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-open-duocolor-round"} {...others} />);
}

export default Component;
