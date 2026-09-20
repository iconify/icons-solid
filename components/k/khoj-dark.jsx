import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d63o6h2ho.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d63o6h2ho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:khoj-dark"} {...others} />);
}

export default Component;
