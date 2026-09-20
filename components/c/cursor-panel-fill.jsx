import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fuchy-bvl.css';
import '../../css/z/zv7yxeb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fuchy-bvl"/><path class="zv7yxeb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-panel-fill"} {...others} />);
}

export default Component;
