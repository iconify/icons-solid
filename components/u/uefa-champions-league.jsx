import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drf92z_ie.css';

const viewBox = {"width":3307.488,"height":1461.757};
const content = `<path class="drf92z_ie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:uefa-champions-league"} {...others} />);
}

export default Component;
