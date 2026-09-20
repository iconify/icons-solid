import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-ce4rbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-ce4rbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pencil-ruler"} {...others} />);
}

export default Component;
