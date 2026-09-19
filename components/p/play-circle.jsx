import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4j_jjn9j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a4j_jjn9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:play-circle"} {...others} />);
}

export default Component;
