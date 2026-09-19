import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ge3ashgyr.css';
import '../../css/s/sxi3o6mdr.css';
import '../../css/y/yzw7bhduj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="ge3ashgyr"/><path clip-rule="evenodd" class="sxi3o6mdr"/><path class="yzw7bhduj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:cup-print"} {...others} />);
}

export default Component;
