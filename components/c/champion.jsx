import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0nwloajm.css';
import '../../css/x/x5fp0gxqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f0nwloajm"/><path class="x5fp0gxqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:champion"} {...others} />);
}

export default Component;
