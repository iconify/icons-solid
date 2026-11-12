import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omrt5kbbp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="omrt5kbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:habitat-social-dark"} {...others} />);
}

export default Component;
