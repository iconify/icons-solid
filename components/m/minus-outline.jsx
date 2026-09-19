import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di5cigt5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="minus-outline"><path class="Vector di5cigt5f" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:minus-outline"} {...others} />);
}

export default Component;
