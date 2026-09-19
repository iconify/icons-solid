import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf3axfyug.css';
import '../../css/i/ikmyx1evo.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="hf3axfyug"/><path clip-rule="evenodd" class="ikmyx1evo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:laravel"} {...others} />);
}

export default Component;
