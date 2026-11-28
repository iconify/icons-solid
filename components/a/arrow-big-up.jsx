import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uidu69k_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uidu69k_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:arrow-big-up"} {...others} />);
}

export default Component;
