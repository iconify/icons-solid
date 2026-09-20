import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg5wtwb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sg5wtwb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-x-inside"} {...others} />);
}

export default Component;
