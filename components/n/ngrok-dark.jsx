import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvkcm2jga.css';

const viewBox = {"width":200,"height":92.11};
const content = `<path class="bvkcm2jga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ngrok-dark"} {...others} />);
}

export default Component;
