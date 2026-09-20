import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij4obb7ix.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ij4obb7ix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:podfetch-light"} {...others} />);
}

export default Component;
