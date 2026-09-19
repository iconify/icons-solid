import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdg9x3jpg.css';

const viewBox = {"width":758,"height":720};
const content = `<path class="mdg9x3jpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:ltthon"} {...others} />);
}

export default Component;
