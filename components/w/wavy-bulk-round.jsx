import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umqey9sxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umqey9sxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wavy-bulk-round"} {...others} />);
}

export default Component;
