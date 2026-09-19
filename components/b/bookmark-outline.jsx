import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1rte6bvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bookmark-outline"><path class="Vector i1rte6bvi" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:bookmark-outline"} {...others} />);
}

export default Component;
