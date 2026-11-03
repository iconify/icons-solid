import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0df5vbnb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n0df5vbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:phpmyadmin"} {...others} />);
}

export default Component;
