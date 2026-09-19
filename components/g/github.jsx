import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjt7kzvwo.css';

const viewBox = {"width":1227.825,"height":1000};
const content = `<path class="fjt7kzvwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:github"} {...others} />);
}

export default Component;
