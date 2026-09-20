import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5kud9bir.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h5kud9bir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:argo-cd-dark"} {...others} />);
}

export default Component;
