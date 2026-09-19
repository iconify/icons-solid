import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqyo_428x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqyo_428x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:flickr-with-circle"} {...others} />);
}

export default Component;
