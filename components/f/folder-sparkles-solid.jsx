import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1gdfy-3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y1gdfy-3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-sparkles-solid"} {...others} />);
}

export default Component;
