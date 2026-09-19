import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vynv-lb8a.css';
import '../../css/t/t2nfipbqf.css';
import '../../css/h/hiuju4b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vynv-lb8a"/><path class="t2nfipbqf"/><path class="hiuju4b3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:eye-slash-solid"} {...others} />);
}

export default Component;
