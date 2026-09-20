import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx4qvpy-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nx4qvpy-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:palo-alto-software"} {...others} />);
}

export default Component;
