import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9qnd8fgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9qnd8fgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:garage-variant-lock"} {...others} />);
}

export default Component;
