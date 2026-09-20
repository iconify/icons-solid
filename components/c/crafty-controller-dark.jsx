import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0f-q8b2g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j0f-q8b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crafty-controller-dark"} {...others} />);
}

export default Component;
