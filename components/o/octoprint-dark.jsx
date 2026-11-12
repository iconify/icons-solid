import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrul9j3dz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zrul9j3dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:octoprint-dark"} {...others} />);
}

export default Component;
