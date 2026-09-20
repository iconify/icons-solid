import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6bvshbal.css';
import '../../css/p/pkbw-nbsh.css';
import '../../css/w/w1fud1gaj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/p/p1gv_vk0o.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGyELhUbwV" class="y6bvshbal"/></defs><path class="pkbw-nbsh"/><path class="w1fud1gaj"/><g class="ij2x_72vy"><use href="#SVGyELhUbwV"/><path class="p1gv_vk0o"/><use href="#SVGyELhUbwV"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:gem-stone"} {...others} />);
}

export default Component;
