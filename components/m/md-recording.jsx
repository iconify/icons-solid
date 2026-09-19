import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9_5pv2nz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d9_5pv2nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-recording"} {...others} />);
}

export default Component;
