import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfdi84ohu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfdi84ohu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:image-refresh"} {...others} />);
}

export default Component;
