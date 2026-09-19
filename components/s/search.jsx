import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gnzekqbpq.css';
import '../../css/m/m4w0vq-oc.css';

const viewBox = {"width":33,"height":32};
const content = `<g class="cuyn6tgcc"><path class="gnzekqbpq"/><path class="m4w0vq-oc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:search"} {...others} />);
}

export default Component;
