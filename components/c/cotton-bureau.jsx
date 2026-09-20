import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh2_e72fr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uh2_e72fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:cotton-bureau"} {...others} />);
}

export default Component;
