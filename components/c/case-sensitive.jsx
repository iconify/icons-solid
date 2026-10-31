import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o7xf-vq8o.css';
import '../../css/b/b-i9qebda.css';
import '../../css/a/ay4jhccad.css';
import '../../css/z/zb7hd3b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="o7xf-vq8o wm-shadow"/><path class="b-i9qebda wm-shadow"/><path class="ay4jhccad"/><path class="zb7hd3b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:case-sensitive"} {...others} />);
}

export default Component;
