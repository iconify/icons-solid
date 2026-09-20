import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvzz0qbpl.css';
import '../../css/j/jyim-db-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zvzz0qbpl"/><path clip-rule="evenodd" class="jyim-db-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:airplay-duotone"} {...others} />);
}

export default Component;
