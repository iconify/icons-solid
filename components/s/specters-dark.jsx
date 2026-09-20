import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urp6r9jfz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="urp6r9jfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:specters-dark"} {...others} />);
}

export default Component;
