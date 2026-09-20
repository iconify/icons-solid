import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz_xj2mif.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xz_xj2mif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filerun-light"} {...others} />);
}

export default Component;
