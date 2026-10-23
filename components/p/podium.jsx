import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vkab2ebod.css';
import '../../css/d/d1e45p8ff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vkab2ebod"/><path class="d1e45p8ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:podium"} {...others} />);
}

export default Component;
