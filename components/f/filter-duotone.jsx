import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdrb4cbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bdrb4cbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:filter-duotone"} {...others} />);
}

export default Component;
