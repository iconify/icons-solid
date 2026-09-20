import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/twoywjb9g.css';
import '../../css/j/j1hrbmamx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="twoywjb9g"/><path class="j1hrbmamx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-music-two-tone"} {...others} />);
}

export default Component;
