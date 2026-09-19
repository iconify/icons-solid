import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl-q4qtnk.css';

const viewBox = {"width":1280,"height":1536};
const content = `<path class="kl-q4qtnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:shield"} {...others} />);
}

export default Component;
