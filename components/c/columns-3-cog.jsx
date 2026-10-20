import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1ncc5zhn.css';
import '../../css/q/q_3tz-zpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g1ncc5zhn"/><path class="q_3tz-zpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:columns-3-cog"} {...others} />);
}

export default Component;
