import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saeo7x0bd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="saeo7x0bd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:browser"} {...others} />);
}

export default Component;
