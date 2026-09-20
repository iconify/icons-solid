import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fosqvzy9m.css';
import '../../css/g/gy7-5wpre.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fosqvzy9m"/><path class="gy7-5wpre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nezha"} {...others} />);
}

export default Component;
