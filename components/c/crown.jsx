import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/valyeabbz.css';
import '../../css/i/i2uv34b7c.css';
import '../../css/a/apw8bcc0k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="valyeabbz"/><path class="i2uv34b7c"/><path clip-rule="evenodd" class="apw8bcc0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:crown"} {...others} />);
}

export default Component;
