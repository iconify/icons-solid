import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8p_-6bjv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w8p_-6bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mergeable-dark"} {...others} />);
}

export default Component;
