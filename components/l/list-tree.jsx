import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dejkkt26f.css';
import '../../css/q/q2a26fj3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dejkkt26f"/><path class="q2a26fj3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:list-tree"} {...others} />);
}

export default Component;
