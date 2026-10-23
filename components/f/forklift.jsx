import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l3ljtjbkk.css';
import '../../css/u/uz9ur1b7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l3ljtjbkk"/><path class="uz9ur1b7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:forklift"} {...others} />);
}

export default Component;
