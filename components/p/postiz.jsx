import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkrl-8bgb.css';
import '../../css/g/g8ydabckk.css';
import '../../css/m/m35k5sbte.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zkrl-8bgb"/><path class="g8ydabckk"/><path class="m35k5sbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:postiz"} {...others} />);
}

export default Component;
