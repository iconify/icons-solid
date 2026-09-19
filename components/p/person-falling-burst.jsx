import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1a-lobmz.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="r1a-lobmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:person-falling-burst"} {...others} />);
}

export default Component;
