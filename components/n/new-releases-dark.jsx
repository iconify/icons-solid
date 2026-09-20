import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_i6csbgg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f_i6csbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:new-releases-dark"} {...others} />);
}

export default Component;
