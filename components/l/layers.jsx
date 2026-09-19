import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if_6tkb7k.css';

const viewBox = {"width":720,"height":840};
const content = `<path class="if_6tkb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:layers"} {...others} />);
}

export default Component;
