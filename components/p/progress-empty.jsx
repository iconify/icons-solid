import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnvec2uhm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tnvec2uhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:progress-empty"} {...others} />);
}

export default Component;
