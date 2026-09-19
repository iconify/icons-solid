import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a7f2abcjc.css';
import '../../css/i/ias5k5bvf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><circle class="a7f2abcjc"/><path class="ias5k5bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eye-stroke-16"} {...others} />);
}

export default Component;
