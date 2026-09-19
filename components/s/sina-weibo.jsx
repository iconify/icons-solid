import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r04k3wdfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r04k3wdfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:sina-weibo"} {...others} />);
}

export default Component;
