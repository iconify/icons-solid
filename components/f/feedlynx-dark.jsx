import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2nbv-b1k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y2nbv-b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:feedlynx-dark"} {...others} />);
}

export default Component;
