import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8-9ihkig.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g8-9ihkig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:itsm-ng"} {...others} />);
}

export default Component;
