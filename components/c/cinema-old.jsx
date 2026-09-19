import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8bvvpe-k.css';
import '../../css/a/aksvigh9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t8bvvpe-k"/><path class="aksvigh9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cinema-old"} {...others} />);
}

export default Component;
