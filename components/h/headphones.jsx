import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tekmz7bgo.css';
import '../../css/s/sm33x3bhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tekmz7bgo"/><path class="sm33x3bhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:headphones"} {...others} />);
}

export default Component;
