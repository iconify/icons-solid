import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8a7jsb0y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g8a7jsb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openzfs-light"} {...others} />);
}

export default Component;
