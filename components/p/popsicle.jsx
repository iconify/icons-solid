import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia7a3j7zv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ia7a3j7zv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:popsicle"} {...others} />);
}

export default Component;
