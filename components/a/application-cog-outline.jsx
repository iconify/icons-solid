import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg0unkbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg0unkbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:application-cog-outline"} {...others} />);
}

export default Component;
