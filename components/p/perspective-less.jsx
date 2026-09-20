import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fusn3hbwb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fusn3hbwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:perspective-less"} {...others} />);
}

export default Component;
