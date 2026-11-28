import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bn2u3fm0i.css';
import '../../css/g/gur-plb-h.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="bn2u3fm0i"/><path class="gur-plb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:text-wrap-slash-duotone"} {...others} />);
}

export default Component;
