import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ancd0qben.css';
import '../../css/z/z_y-m9b3t.css';
import '../../css/a/a3z8wibns.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ancd0qben"/><path class="z_y-m9b3t"/><path class="a3z8wibns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-wearing-turban"} {...others} />);
}

export default Component;
