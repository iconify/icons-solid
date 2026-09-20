import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt0p3obti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pt0p3obti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:info-hexagon-solid"} {...others} />);
}

export default Component;
