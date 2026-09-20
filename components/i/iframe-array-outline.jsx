import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzn2au2sx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzn2au2sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:iframe-array-outline"} {...others} />);
}

export default Component;
