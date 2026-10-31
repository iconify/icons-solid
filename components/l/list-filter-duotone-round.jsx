import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mok_4qi5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mok_4qi5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-filter-duotone-round"} {...others} />);
}

export default Component;
