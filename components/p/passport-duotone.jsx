import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a9q4f0b9w.css';
import '../../css/f/f6uir55zz.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="a9q4f0b9w"/><path class="f6uir55zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:passport-duotone"} {...others} />);
}

export default Component;
