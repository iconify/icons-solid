import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy8j9sb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uy8j9sb6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:puzzle-plus-outline"} {...others} />);
}

export default Component;
