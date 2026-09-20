import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5zr8ubgz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5zr8ubgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tableau-light"} {...others} />);
}

export default Component;
