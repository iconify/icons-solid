import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw6k_dayf.css';

const viewBox = {"width":628,"height":694};
const content = `<path class="fw6k_dayf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:umbrella"} {...others} />);
}

export default Component;
