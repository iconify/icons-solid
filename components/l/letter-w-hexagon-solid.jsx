import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgvx7jbec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vgvx7jbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-w-hexagon-solid"} {...others} />);
}

export default Component;
