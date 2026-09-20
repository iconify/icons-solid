import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aav1k0baj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aav1k0baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:play-hexagon-solid"} {...others} />);
}

export default Component;
