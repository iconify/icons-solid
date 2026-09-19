import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvzo8oh1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="grid-outline"><path class="Vector uvzo8oh1p" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:grid-outline"} {...others} />);
}

export default Component;
