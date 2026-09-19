import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm0tk8bew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sparks-outline"><path class="Vector gm0tk8bew" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:sparks-outline"} {...others} />);
}

export default Component;
