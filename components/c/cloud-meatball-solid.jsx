import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fya13fg3z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fya13fg3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:cloud-meatball-solid"} {...others} />);
}

export default Component;
