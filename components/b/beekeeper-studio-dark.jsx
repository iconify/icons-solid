import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umr1o5bgm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="umr1o5bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beekeeper-studio-dark"} {...others} />);
}

export default Component;
