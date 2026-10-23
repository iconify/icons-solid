import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/egexid49i.css';
import '../../css/w/w8iy_tbhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="egexid49i"/><path class="w8iy_tbhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:church"} {...others} />);
}

export default Component;
