import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghv-0w7ie.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="ghv-0w7ie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:mars-stroke"} {...others} />);
}

export default Component;
